/**
 * @description: 连接redis的方法，get，set
 * @author：betsyxw
 */
const redis = require('redis')
const { REDIS_CONF } = require('../conf/db')

//创建客户端
const redisClient = redis.createClient(REDIS_CONF.port,REDIS_CONF.host)
redisClient.on('error',err=>{
    console.error('redis error=>',err)
})

//set
/**
 * 
 * @param {string} key 
 * @param {string} val 
 * @param {number} timeout 单位是秒
 */
function set (key, val, timeout=60*60){
    if(typeof val === 'object'){
        val = JSON.stringify(val)
    }
    redisClient.set(key,val)
    redisClient.expire(key,timeout)
}


/**
 * redis-get
 * @param {string} key 
 */
function get(key){
    const promise = new Promise((resolve,reject)=>{
        redisClient(key,(err,val)=>{
            if(err){
                reject(err)
                return
            }
            if(val == null){
                resolve(null)
                return
            }
            try{
                resolve( JSON.parse(val))
            }catch(ex){
                resolve(val)
            }
        })
    })
    return promise
}






module.exports = {
    set,
    get,
    
}