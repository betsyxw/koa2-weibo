const router = require('koa-router')()

//父级
router.prefix('/users')


//子级
router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
})


//子级
router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

//Post
//function(ctx,next){} ===async(ctx,next)=>{}
router.post('/login',async(ctx,next)=>{
  //传入用户名+密码,data在ctx.request.body里面
  const {userName, password} = ctx.request.body
  ctx.body = {
    userName,
    password
  }
} )

module.exports = router
