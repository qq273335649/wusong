/*
 * @Author: your name
 * @Date: 2022-02-18 11:16:50
 * @LastEditTime: 2022-02-18 14:11:45
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \vue\ws-koa2app\controller\users.js
 */
const { User } = require("../models/users");
const crudUtil = require("../controller/crudUtil");
const userAdd = async function (ctx, next) {
  const { name, password } = ctx.request.body;
  await crudUtil.add(ctx, User, { name, password });
};

const userDel = async function (ctx) {
  console.log(ctx.request.body);
  ctx.body = "删除";
};
const userEdit = async (ctx) => {
  const userinfo = ctx.request.body;
  await crudUtil.update(ctx, User, { ...userinfo });
  ctx.body = "修改";
};
const userFind = async (ctx) => {
  const {} = ctx.request.query;
  await crudUtil.find(ctx, User);
};
const userFindOne = async (ctx) => {
  // await User.findOne({_id:ctx.params.id});
  ctx.body = "查询一条";
};
module.exports = {
  userAdd,
  userDel,
  userEdit,
  userFind,
  userFindOne,
};
