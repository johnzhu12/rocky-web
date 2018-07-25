let path = require('path');
let webpack = require('webpack');
const rootDir = process.cwd() + "/rocky-web/" //跟地址
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: rootDir + "app/main.js",//已多次提及的唯一入口文件
    output: {
        path: rootDir + "dist",//打包后的文件存放的地方
        filename: "bundle.js"//打包后输出文件的文件名
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),//热加载
        new HtmlWebpackPlugin({
            template: rootDir + "app/index.tmpl.html"//new 一个这个插件的实例，并传入相关的参数
        })
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
            include: rootDir + "app/",
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