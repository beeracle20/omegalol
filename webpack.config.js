const path = require('path');

const config = {
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    }
}

const appConfig = Object.assign({}, config, {
    name: 'app',
    entry: './client/src/js/index.js',
    output: {
        path: path.resolve(__dirname, 'client/dist'),
        filename: 'build.js'
    },
});



module.exports = [
    appConfig     
];