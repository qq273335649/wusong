const Koa = require('koa');
const router = require('koa-router')();
const app = new Koa();
const Student = require('./model/student.js');
router.get('/', async (ctx, next) => {
	ctx.body = {
		result: [
			{
				name: 'tom',
				age: 25,
			}
		]
	}
})
router.get('/api/student', async (ctx, next) => {
	let result = await Student.find({}, function (err, docs) {
		if (err) {
			return
		}
		return docs
	}).clone().catch(function (err) { console.log("err", err) });

	ctx.body = {
		result,
	}
})
app.use(router.routes())
// app.use(async ctx => {
//   ctx.body = 'Hello World';
// });

app.listen(3000, () => {
	console.log('服务启动');
});