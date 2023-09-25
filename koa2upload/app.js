const Koa = require('koa');

const { koaBody } = require('koa-body');

const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')

const index = require('./routes/index')
const users = require('./routes/users')

// error handler
onerror(app)

// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
  extension: 'ejs'
}))

// 启用文件上传功能
app.use(koaBody({ multipart: true })); 

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

app.use(async (ctx, next) => {
  if (ctx.url === '/upload' && ctx.method === 'POST') {
    console.log('====================================');
    console.log('111');
    console.log('====================================');
    // 获取上传的文件
    const file = ctx.request.files.file;
    // 执行你的文件上传操作，例如保存文件到服务器或其他处理
    // ...
    console.log(file);
    ctx.body = {
      code: 200,
      success: true,
      msg: '文件上传成功',
    }

  } else {
    await next();
  }
});

// routes
app.use(index.routes(), index.allowedMethods())
app.use(users.routes(), users.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
