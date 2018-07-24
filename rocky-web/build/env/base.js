let path = require('path');
let webpack = require('webpack');

module.exports = {
    entry: process.cwd() + "/rocky-web/app/main.js",//已多次提及的唯一入口文件
    output: {
        path: process.cwd() + "/rocky-web/dist",//打包后的文件存放的地方
        filename: "bundle.js"//打包后输出文件的文件名
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()//热加载
    ],
    module: {
        rules: [{
            test: /(\.jsx|\.js)$/,
            use: {
                loader: "babel-loader",
                options: {
                    "presets": [
                        "env", "react"
                    ]
                }
            },
            include: process.cwd() + "/rocky-web/app/",
            exclude: /node_modules/
        },
        {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/
        }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    }
}