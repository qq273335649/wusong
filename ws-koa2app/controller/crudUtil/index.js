/*
 * @Author: your name
 * @Date: 2022-02-18 11:29:29
 * @LastEditTime: 2022-02-18 14:11:10
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \vue\ws-koa2app\controller\crudUtil\index.js
 */
/**
 * @description: 添加
 * @param {*} ctx
 * @param {*} model
 * @param {*} data
 * @return {*}
 */
const add = (ctx, model, data) =>
  model
    .create(data)
    .then((rel) => {
      const { _id, name } = rel;
      ctx.body = {
        code: 200,
        result: { _id, name },
        success: true,
      };
    })
    .catch((err) => {
      console.log(err);
      ctx.body = {
        code: 500,
        result: err,
        success: false,
        msg: "添加失败",
      };
    });
/**
 * @description: 查询所有
 * @param {*} ctx
 * @param {*} model
 * @param {*} where
 * @return {*}
 */
const find = (ctx, model, where = {}) =>
  model
    .find(where)
    .then((rel) => {
      console.log(rel);
      ctx.body = {
        code: 200,
        list: rel.map(({ _id, name }) => ({ _id, name })),
      };
    })
    .catch((err) => {
      console.log(err);
      ctx.body = {
        code: 500,
        err,
      };
    });
const update = (ctx, model, where = {}) =>
  model.updateOne(where).then(() => {});

module.exports = {
  add,
  // del,
  update,
  find,
};
