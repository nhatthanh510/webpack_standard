/**
 * Created by MyPC on 11/18/2016.
 */
var path = require('path');
var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var config = {
    devtool: 'cheap-module-eval-source-map',
    entry: [
        path.join(__dirname, 'src/js/app.js'),
        'webpack-hot-middleware/client'
    ],
    output: {
        path: path.join(__dirname, '/'),
        filename: 'bundle.js',
        publicPath: 'http://localhost:3000/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['babel'],
                include: path.join(__dirname, 'src'),
                exclude: /node_modules/
            },
            {
                test: /\.css?$/,
                include: path.join(__dirname, 'src'),
                loaders: [
                    'style',
                    'css',
                    'autoprefixer?browsers=last 3 versions'
                ]
            },
            {
                test: /\.html$/,
                loader: "html-loader"
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                include : path.join(__dirname, 'src'),
                loader  : 'url-loader?limit=30000&name=images/[name].[ext]'
            },
            {
                test: /\.json$/,
                loader: 'json'
            }
        ]
    }
};

module.exports = config;