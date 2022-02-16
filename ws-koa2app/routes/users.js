const router = require('koa-router')()
const { User } = require('../models/users');
router.prefix('/users')

router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
})
//添加
router.post('/add', async function (ctx, next) {
  console.log(ctx.request.body);
  const { name, password, repassword } = ctx.request.body;
  if (password === repassword) {
    await User.create({ name, password }).then((rel) => {
      console.log(rel);
      ctx.body = {
        code: 200,
        result: rel,
        success: true
      }
    }).catch((err) => {
      console.log(err);
      ctx.body = {
        code: 500,
        result: err,
        success: false,
        msg: '添加失败',
      }
    })
  } else {
    ctx.body = {
      code: 200,
      success: false,
      msg: '两次密码必须一致',
    }
  }
})
//删除
router.post('/del', async function (ctx) {
  console.log(ctx.request.body);
  ctx.body = '删除';
})
//修改
router.post('/edit', async () => {
  const { } = ctx.request.body
  ctx.body = '修改'
})
//查询所有
router.get('/find', async (ctx) => {
  const { } = ctx.request.query
  await User.find().then((rel) => {
    console.log(rel);
    ctx.body = {
      code: 200,
      list: rel
    }
  }).catch((err) => {
    console.log(err);
    ctx.body = {
      code: 500,
      err
    }
  })
})
//查询单个
router.get('/findone', async () => {
  const { } = ctx.request.body
  ctx.body = '查询一条'
})
module.exports = router
