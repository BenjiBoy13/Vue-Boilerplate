const HTMLWebpackConfig = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const { join } = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const { HotModuleReplacementPlugin } = require('webpack');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    mode: "development",
    entry: join(__dirname, 'app.js'),
    output: {
        path: join(__dirname, 'dist'),
        filename: "app.bundle.js"
    },
    devServer: {
        port: 3000,
        hot: true,
        open: true,
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.s?css$/,
                loader: [
                    MiniCSSExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.vue', '.scss']
    },
    plugins: [
        new HotModuleReplacementPlugin(),
        new VueLoaderPlugin(),
        new HTMLWebpackConfig({
            showErrors: true,
            cache: true,
            title: "BenjiBoy's Vue Boilerplate",
            template: join(__dirname, 'index.html')
        }),
        new MiniCSSExtractPlugin({
            filename: './app.bundle.css'
        })
    ],
    devtool: 'inline-cheap-module-source-map',
    externals: [nodeExternals()]
};