function WebpackPxswitchPlugin(options) {
    // user input options
    this.options = options.fontsize || '50';
    this.overwrite = options.overwrite || true;

}

WebpackPxswitchPlugin.prototype.apply = function (compiler) {
    // some code here
    compiler.plugin('emit', (compiltation, callback) => {
        const baseFont = parseInt(this.options.baseSize || 36)
        Object.keys(compiltation.assets).forEach((key) => {
            if (key.slice(-3) == 'css') {
                let tSource = compiltation.assets[key].source()
                tSource = tSource.replace(/([0-9]*\.[0-9]+|[0-9]+)px/g, function (number) {
                    return `${(number.slice(0, -2) / baseFont).toFixed(2)}rem`
                })
                compiltation.assets[key] = {
                    source: function () {
                        return tSource
                    },
                    size: function () {
                        return tSource.length
                    }
                }
            }

        })
        //Important
        callback()
    })
}


module.exports = WebpackPxswitchPlugin
