import babel from "rollup-plugin-babel";

/// ///////////////////////////////////////////////////////////////////////////////////////////////////
// this file takes all of our logic files, transpiles them to es5 and outputs them in the build dir //
/// ///////////////////////////////////////////////////////////////////////////////////////////////////

export default {
	input: "main.js",
	output: {
		file: "dist/bundle.js",
    format: "umd",
    name: "Entry"
	},
	plugins: [
		babel({
			exclude: "node_modules/**"
		})
	]
};