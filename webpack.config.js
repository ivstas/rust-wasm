const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const buildDir = 'static';

module.exports = {
    entry: path.join(__dirname, 'index.js'),
    output: {
        path: path.resolve(__dirname, buildDir),
        filename: 'app.js',
    },
    module: {
        rules: [
            {
                test: /\.wasm$/,
                loaders: ['wasm-loader']
            }
        ]
    },
    plugins: [
        new CopyWebpackPlugin([
            { from: 'index.html' },
        ]),
    ],
    devServer: {
        contentBase: path.join(__dirname, buildDir),
        compress: true,
        port: 9000
    },
}