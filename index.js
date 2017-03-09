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
	compiler.plugin('emit', compiltation=>{
		console.log('Hello World!');
		console.log(compiltation);
		console.log(this.options.toString());
	});
}


module.exports = WebpackPxswitchPlugin;
