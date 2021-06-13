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

module.exports = router
