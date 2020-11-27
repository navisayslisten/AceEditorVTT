const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    name: 'aevtt',
    entry: {
        index: {
            import: path.resolve(__dirname, 'src/scripts/index.js'), filename: 'index.js'
        },
        ace: {
            import: ['ace-builds'], filename: 'ace.js'
        }
    },
    mode: 'development',
    devtool: 'source-map',
    output: {
        publicPath: 'modules/ace-editor-vtt/scripts/',
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist/scripts/'),
    },
    optimization: {
        minimize: true,
    },
    plugins: [new CleanWebpackPlugin()],
};