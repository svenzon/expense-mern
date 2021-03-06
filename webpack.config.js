var path = require("path");
var webpack = require("webpack");

module.exports = {
    entry: "./client/index.js",
    output: {
        path: path.join(__dirname, "client"),
        filename: "bundle.js"
    },
    module: {
        loaders: [{
            test: /.jsx?$/,
            loader: "babel-loader",
            exclude: /node_modules/,
            query: {
            presets: ["env", "react"]
            }
        },
        {
         test: /\.css$/,
         use: ["style-loader", "css-loader"]
        }]
    }
}