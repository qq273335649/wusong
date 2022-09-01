const { Posts } = require('../models/posts');
const crudUtil = require('../controller/crudUtil');

const postsAdd = async (ctx, next) => {
  // const { name, password } = ctx.request.body;
  // name: String,
  // title: String,
  // content: String,
  await crudUtil.add(ctx, Posts, {  })
}

module.exports = {
  postsAdd,
  // postsDel,
  // postsEdit,
  // postsFind,
  // postsFindOne
}
