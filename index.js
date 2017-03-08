const _ = require('lodash')

function WebpackPxswitchPlugin(options) {

	// user input options
	this.options = _.extend({
		fontsize: options.fontsize || '50', // default => 配置 html => 写在html中
		overwrite: options.overwrite || true
	}, options);
}

WebpackPxswitchPlugin.prototype.apply = function (compiler, callback) {
	// some code here
	compiler.plugin('done', function () {
		console.log('Hello World!');
		console.log(this.options.toString());
	});
}


module.exports = WebpackPxswitchPlugin;
