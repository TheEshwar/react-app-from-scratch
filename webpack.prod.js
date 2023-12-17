const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: "production",
	entry: "./src/index.js",
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "dist"),
        clean: true,
		assetModuleFilename: 'images/[hash][ext][query]'
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: "./public/index.html",
		}),
		new MiniCssExtractPlugin()
	],
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-react", "@babel/preset-env"],
					}
				}
			},
			{
				test: /\.css$/,
				use: [
					// one way
					// "style-loader", "css-loader"

					// second way
					// {loader: "style-loader"},

					// to load js and css seperately through build
					{loader: MiniCssExtractPlugin.loader},
					{loader: "css-loader", options: {modules: true}},
				]
			},
			{
				test: /\.s[ac]ss$/,
				use: [
					// one way
					// "style-loader", "css-loader"
					// second way
					// {loader: "style-loader"}, // injects css files to html files.

					// to load js and css seperately through build
					{loader: MiniCssExtractPlugin.loader},
					{loader: "css-loader", options: {modules: true}}, // read css 
					{loader: "sass-loader"} //convert sass to normal css
				]
			},
			{
				test: /\.(png|jpg|gif)$/,
				type: "asset/resource"
			}
		],
	}
};
