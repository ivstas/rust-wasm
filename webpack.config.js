const path = require('path');
const copyFile = require('quickly-copy-file');

const buildDir = 'static';

// use this hack until wepback-copy-plugin is not compatible with webpack 4
copyFile('index.html', `${buildDir}/index.html`, function(error) {
    if (error) return console.error(error);
    console.log('File was copied!')
  });

module.exports = {
    entry: path.join(__dirname, 'index.js'),
    output: {
        path: path.resolve(__dirname, buildDir),
        filename: 'app.js',
        webassemblyModuleFilename: '[modulehash].wasm',
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.wasm$/,
                type: 'webassembly/experimental',
            },
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, buildDir),
        compress: true,
        port: 9000
    },
}