const { User } = require('../models/users')

/*
 * @Author: your name
 * @Date: 2022-02-14 09:13:08
 * @LastEditTime: 2022-02-21 09:55:43
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \vue\ws-koa2app\routes\index.js
 */
const router = require('koa-router')()

router.get('/', async (ctx, next) => {
  const { query } = ctx.request;
  await User.findOne(query).then((res) => {
    if (res) {//有数据
      console.log(res);
      console.log('查询成功');
    }
  })
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

module.exports = router
