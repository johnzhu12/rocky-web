let merge = require('webpack-merge');
let perConf = require('../config/bizConfig.json');
let baseConf = require('./base.js');
// let envConf = merge(baseConf, {
//     devtool: 'eval-source-map'
// });
let envConf = baseConf;
module.exports = envConf;