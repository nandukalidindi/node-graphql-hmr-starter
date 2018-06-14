const path = require('path')

module.exports = {
    mode: "production",
    entry: [
        './server/index'
    ],
    target: 'node',
    module: {
        rules: [{
            test: /\.js?$/,
            use: 'babel-loader',
            exclude: /node_modules/
        }]
    },
    output: {
        path: path.join(__dirname, 'prod'),
        filename: 'server.js'
    }
}
