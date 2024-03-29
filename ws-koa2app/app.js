/*
 * @Author: your name
 * @Date: 2022-02-14 09:13:08
 * @LastEditTime: 2022-02-21 14:29:52
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \ws-koa2app\app.js
 */
const Koa = require('koa')
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const jsonerror = require('koa-json-error');
const bodyparser = require('koa-bodyparser');
const parameter = require('koa-parameter');
const logger = require('koa-logger')
const koajwt = require('koa-jwt')
const MongooseConnect = require('./db');

const index = require('./routes/index')
const auth = require('./routes/auth')
const users = require('./routes/users')
const { secret } = require('./controller/token/addtoken')
const app = new Koa()
MongooseConnect();
// error handler
onerror(app)
// middlewares
app.use(jsonerror());
app.use(bodyparser({
  enableTypes: ['json', 'form', 'text']
}))
app.use(parameter(app));
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
  extension: 'pug'
}))

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// // 错误处理
app.use(async (ctx, next) => {
  return next().catch((err) => {
    if (err.status === 401) {
      ctx.status = 401;
      ctx.body = {
        code: 401,
        msg: 'Protected resource, use Authorization header to get access\n'
      }
    } else {
      throw err;
    }
  })
})

app.use(koajwt({
  secret,
})
  .unless({
    path: [
      /\/string/,
      /\/users/,
      /\/login/,
      /\/register/,
      /\/wxCode2Session/
    ]
  }))

// routes
app.use(index.routes(), index.allowedMethods())
app.use(users.routes(), users.allowedMethods())
app.use(auth.routes(), auth.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app