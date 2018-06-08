const fs = require('fs')
const path = require('path')

module.exports = (path, files = "", callback) => {
    var result = [];
    var fileNames = files.split(",");

    fileNames.forEach(item => {
        var src = `${path}/images/${item}`;
        var type = item.replace(/.+\./, "").toLowerCase();
        var base64 = `data:image/${type};base64,`;

        if (fs.existsSync(src)) {
            base64 += new Buffer(fs.readFileSync(src)).toString('base64');
        }
        result.push(base64);
    });

    if (callback) callback(result);

}