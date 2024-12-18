const path = require('path')

module.exports = {
    entry: {
        index: './public/javascript/index.js',
        users: './public/javascript/users.js'
    },
    output: {
        path: path.resolve(__dirname, 'public/javascript'),
        filename: '[name].bundle.js'
    }
}