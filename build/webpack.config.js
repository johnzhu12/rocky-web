let envConf;
let env = process.env.NODE_ENV;

if (env) {
    console.log('apply prod configs');
    envConf = require('./env/prod.js');
} else {
    console.log('apply dev configs');
    envConf = require('./env/dev.js');
}

module.exports = envConf;