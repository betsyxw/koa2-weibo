//mysql,redis连接配置

/**
 * @description:存储配置，redis
 * @author:betsyxw
 */

const { isProd } = require('../utils/env')

let REDIS_CONF = {
    port:6379,
    host: '127.0.0.1'
}

if(isProd){
    REDIS_CONF = {
        //线上环境
        port: 6379,
        host: '127.0.0.1'
    }
}

module.exports = {
    REDIS_CONF,

}
