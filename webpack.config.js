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
            import: ['ace-builds/src-min-noconflict/ace'], filename: 'ace.js'
        },
        theme: {
            import: ['ace-builds/src-min-noconflict/theme-solarized_dark.js'], filename: 'theme-solarized_dark.js'
        },
        errorMarker: {
            import: ['ace-builds/src-min-noconflict/ext-error_marker.js'], filename: 'ext-error_marker.js'
        },
        langTools: {
            import: ['ace-builds/src-min-noconflict/ext-language_tools.js'], filename: 'ext-language_tools.js'
        },
        modeJavascript: {
            import: ['ace-builds/src-min-noconflict/mode-javascript.js'], filename: 'mode-javascript.js'
        },
        workerJavascript: {
            import: ['ace-builds/src-min-noconflict/worker-javascript.js'], filename: 'worker-javascript.js'
        },
        snippets: {
            import: ['ace-builds/src-min-noconflict/snippets/javascript.js'], filename: 'snippets/javascript.js'
        }
    },
    mode: 'development',
    devtool: 'source-map',
    output: {
        publicPath: 'modules/ace-editor-vtt/scripts/',
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist/scripts/'),
    },
    plugins: [new CleanWebpackPlugin()],
};