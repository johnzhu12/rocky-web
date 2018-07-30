let merge = require('webpack-merge');
let perConf = require('../config/bizConfig.json');
let baseConf = require('./base.js');
let envConf = merge(baseConf, {
    devtool: 'inline-source-map',
    // entry: ['webpack/hot/dev-server'],
    devServer: {
        contentBase: './public/',
        host: perConf.host || 'localhost',
        port: '8100',
        inline: true,//可以监控js变化
        hot: true//热启动
    }
});

module.exports = envConf;