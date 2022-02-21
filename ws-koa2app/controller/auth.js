/*
 * @Author: your name
 * @Date: 2022-02-21 11:09:03
 * @LastEditTime: 2022-02-21 15:45:01
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \vue\ws-koa2app\controller\auth.js
 */

const { User } = require('../models/users');
const crudUtil = require('../controller/crudUtil');
const { addtoken } = require('./token/addtoken');

const authLogin = async function (ctx, next) {
    console.log('登录');
    console.log(ctx.request.body);
    const { name, password } = ctx.request.body;
    let user;
    await User.findOne({ name }).then((res) => {
        console.log('res', res);
        user = res;
    }).catch((err) => {
        console.log(err);
        ctx.body = {
            code: 500,
            err
        }
    })
    console.log(user);
    if (!user) {
        ctx.body = {
            code: 200,
            success: false,
            msg: '账户不存在',
        }
        return;
    }
    if (user.password !== password) {
        ctx.body = {
            code: 200,
            success: false,
            msg: '账户密码不正确',
        }
        return;
    }
    //添加token
    const token = addtoken({ name, password });
    ctx.body = {
        code: 200,
        user: { ...user, token },
        success: true,
        msg: '登录成功',
    }
}

module.exports = {
    authLogin
}