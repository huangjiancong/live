function getTitle(vm) {
  const {
    title
  } = vm.$options
  if (title) {
    return typeof title === 'function' ?
      title.call(vm) :
      title
  }
}

const serverTitleMixin = {
  created() {
    const title = getTitle(this)
    if (title) {
      this.$ssrContext.title = `v1.0.0 | ${title}`
      // console.log(this.$ssrContext)
    }
  }
}

const clientTitleMixin = {
  mounted() {
    const title = getTitle(this)
    if (title) {
      document.title = `v1.0.0 | ${title}`
    }
  }
}

export default process.env.VUE_ENV === 'server' ?
  serverTitleMixin :
  clientTitleMixin