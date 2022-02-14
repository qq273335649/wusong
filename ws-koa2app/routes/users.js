const router = require('koa-router')()

router.prefix('/users')

router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

router.post('/add', function (ctx) {
  console.log(ctx.request.body);
  ctx.body = '添加';
})

module.exports = router
