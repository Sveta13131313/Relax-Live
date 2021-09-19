const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: {
        dev: "./src/index.js",
        admin: "./src/admin.js",
        auth: "./src/auth.js",
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './dist')

    },
    plugins: [
        new CleanWebpackPlugin(),
    ],
    mode:'production',
    module:{
        rules:[
            {
                test:/\.js$/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:['@babel/env']
                    },
                },
                exclude:/node_modules/,
            }
        ]
    }
};