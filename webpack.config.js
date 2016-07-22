/** Created by Olivia on 16/7/20  */
module.exports = {
	entry : {
		animation: "./src/animation.js"
	},
	output : {
		path : __dirname + "/build",
		filename : "[name].js",
		library : "animation",
		libraryTarget : "umd"
	}
};