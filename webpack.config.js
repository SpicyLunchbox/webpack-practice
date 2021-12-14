const path = require("path");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = {
	entry: "./src/index.js", // defines the entry point to your application
	output: {
		filename: "coolbeans.js", // name of the file that we want to compile our javascript to
		path: path.resolve(__dirname, "dist"),
	},
	module: {
		rules: [
			{
				test: /\.scss$/, // looks for any file with this suffix
				use: ["style-loader", "css-loader", "sass-loader"], // when it finds a .scss file, it will use these loaders to process and compile
			},
		],
	},
	plugins: [new BundleAnalyzerPlugin()], // an array for plugging in your plugins

	devServer: {
		contentBase: path.join(__dirname, "public"),
		port: 9000,
	},
};
