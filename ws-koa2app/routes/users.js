const router = require('koa-router')()
router.prefix('/users')
const userCtl = require('../controller/users');
router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
})
//添加
router.post('/add', userCtl.userAdd);
//删除
router.post('/del', userCtl.userDel)
//修改
router.post('/edit', userCtl.userEdit)
//查询所有
router.get('/find', userCtl.userFind)
//查询单个
router.get('/findone/:id', userCtl.userFindOne)

module.exports = router
