var HtmlWebpackPlugin = require('html-webpack-plugin')
var webpack = require('webpack')
var path = require('path')

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.resolve(__dirname, './client/dist'),
        compress: true,
        hot: true,
        open: true,
        port: 3001
    },
    entry: './client/main.js',
    output: {
        path: path.resolve(__dirname, './client/dist'),
        filename: 'cors.client.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './client/index.html'
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
}