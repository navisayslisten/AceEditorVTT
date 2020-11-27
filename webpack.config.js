const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    name: 'ace-editor-vtt',
    entry: path.resolve(__dirname, 'src/scripts/index.js'),
    mode: 'development',
    devtool: 'source-map',
    output: {
        publicPath: 'modules/AceEditorVTT/scripts/',
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist/scripts/'),
    },
    plugins: [
        new CleanWebpackPlugin(),
        new webpack.IgnorePlugin(/greensock/),
    ],
};