const env = require('./env')
const fs = require('fs')
const path = require('path')
const LRU = require('lru-cache')
const express = require('express')
const proxy = require('http-proxy-middleware')
const compression = require('compression')
const microcache = require('route-cache')
const filesMerge = require('./api/filesMerge')
const resolve = file => path.resolve(__dirname, file)
const { createBundleRenderer } = require('vue-server-renderer')


const isProd = process.env.NODE_ENV === 'production'
const useMicroCache = process.env.MICRO_CACHE !== 'false'
const serverInfo =
  `express/${require('express/package.json').version} ` +
  `vue-server-renderer/${require('vue-server-renderer/package.json').version}`

const app = express()

function createRenderer(bundle, options) {
  options.inject = false
  return createBundleRenderer(bundle, Object.assign(options, {
    cache: LRU({
      max: 1000,
      maxAge: 1000 * 60 * 15
    }),
    basedir: resolve('./dist'),
    runInNewContext: false
  }))
}

let renderer
let readyPromise
const templatePath = resolve('./src/index.template.html')
if (isProd) {
  const template = require('html-minifier').minify(fs.readFileSync(templatePath, 'utf-8'), {
    collapseWhitespace: true,
    minifyJS: true,
    minifyCSS: true,
    minifyURLs: true,
    removeAttributeQuotes: true
  });
  const bundle = require('./dist/vue-ssr-server-bundle.json')
  const clientManifest = require('./dist/vue-ssr-client-manifest.json')
  renderer = createRenderer(bundle, {
    template,
    clientManifest
  })
} else {
  readyPromise = require('./build/setup-dev-server')(
    app,
    templatePath,
    (bundle, options) => {
      renderer = createRenderer(bundle, options)
    }
  )
}

const serve = (path, cache) => express.static(resolve(path), {
  maxAge: cache && isProd ? 1000 * 60 * 60 * 24 * 30 : 0
})

/* api proxy */
app.use('/api', proxy({
  target: env.prod.API_ROOT,
  changeOrigin: true,
  pathRewrite: {
    '^/api': '/h5api'
  }
}));

/* images merge */
app.use('/filesMerge', (req, res) => {
  var { files } = req.query;

  filesMerge(path.resolve("./public"), files, data => {
    res.json({
      data,
      success: true
    });
  });


});

app.use(compression({ threshold: 0 }))
app.use('/dist', serve('./dist', true))
app.use('/public', serve('./public', true))
app.use('/guide', serve('./guide', true))

app.use(microcache.cacheSeconds(1, req => useMicroCache && req.originalUrl))

function render(req, res) {
  const s = Date.now()

  res.setHeader("Content-Type", "text/html")
  res.setHeader("Server", serverInfo)

  const handleError = err => {
    if (err.url) {
      res.redirect(err.url)
    } else if (err.code === 404) {
      res.status(404).send('404 | Page Not Found')
    } else {
      res.status(500).send('500 | Internal Server Error')
      console.error(`error during render : ${req.url}`)
      console.error(err.stack)
    }
  }

  const context = {
    title: require('./package.json').version,
    version: require('./package.json').version,
    url: req.url
  }
  renderer.renderToString(context, (err, html) => {
    if (err) {
      return handleError(err)
    }
    res.send(html)
    if (!isProd) {
      console.log(`whole request: ${Date.now() - s}ms`)
    }
  })
}

app.get('*', isProd ? render : (req, res) => {
  readyPromise.then(() => render(req, res))
})

const port = process.env.PORT || 8080
app.listen(port, () => {
  console.log(`server started at localhost:${port}`)
})
