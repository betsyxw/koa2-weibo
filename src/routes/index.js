const router = require('koa-router')()

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2021!',
    msg:"你好",
    isMe: true,
    blogList: [
      {
        id:1,
        title:'es6 扩展运算符语法'
      },
      {
        id:2,
        title:'element UI,全部载入，按需加载，引入插件'
      },
      {
        id:3,
        title:'解决vue-cli 3.x打包后空白页面'
      }
    ]
  })
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

//博客个人主页
router.get('/profile/:userName', async(ctx,next)=>{
  const {userName } = ctx.params
  ctx.body ={
    title: 'this is =>profile page',
    userName
  }
})

//加载更多
//get请求，直接从ctx.params中获取参数
router.get('/loadMore/:userName/:pageIndex', async(ctx,next)=>{
  const {userName,pageIndex} = ctx.params
  ctx.body = {
    title:'this is loading page API',
    userName,
    pageIndex
  }
})



module.exports = router
