/*
 * @Author: your name
 * @Date: 2022-02-21 11:09:03
 * @LastEditTime: 2022-02-21 15:45:01
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \vue\ws-koa2app\controller\auth.js
 */

const APPID = "wxb34e640b1fcffc83";
const SECRET = "2bf76de5b0e0099e73256a0e1bb1509f";

const { User } = require('../models/users');
const crudUtil = require('../controller/crudUtil');
const { addtoken } = require('./token/addtoken');
const koa2Req = require('koa2-request');
let WXBizDataCrypt = require('../WXBizDataCrypt');
const { log } = require('debug/src/browser');

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

const authRegister = async function (ctx, next) {
    const { name, password, repassword } = ctx.request.body;
    if (password === repassword) {// TODO验证
        let user;
        // TODO去重
        await User.create({ name, password }).then((rel) => {
            user = rel
        }).catch((err) => {
            console.log(err);
            ctx.body = {
                code: 500,
                result: err,
                success: false,
                msg: '注册失败',
            }
        })
        //添加token
        const token = addtoken({ name, password });
        ctx.body = {
            code: 200,
            result: { ...user, token },
            success: true,
            msg: '注册成功',
        }
    } else {
        ctx.body = {
            code: 200,
            success: false,
            msg: '两次密码必须一致',
        }
    }
}

const authWxCode2Session = async function (ctx, next) {
    const { body } = ctx.request;
    if (body.js_code) {// TODO验证
        // request选项
        const res = await koa2Req(`https://api.weixin.qq.com/sns/jscode2session?appid=${APPID}&secret=${SECRET}&js_code=${body.js_code}&grant_type=authorization_code`);

        let { session_key } = JSON.parse(res.body);

        // 把加密数据里的空格换成+号，因为在传输过程中，服务器会把+号替换为空格。
        // let encryptedData = body.encryptedData.replace(/ /g,'+')
        // let iv = body.iv.replace(/ /g,'+');

        let pc = new WXBizDataCrypt(APPID, session_key);  // 生成解**匙
        let encodedata = pc.decryptData(body.encryptedData , body.iv); //  获取解密数据
        console.log(encodedata,'encodedata');

        const { nickName, avatarUrl, unionid } = encodedata;

        console.log('session_key: ',session_key);
        console.log('openId: ',encodedata.openId);

        ctx.body = {
            code: 200,
            success: false,
            msg: '验证成功',
            userInfo: {
                nickName,
                avatarUrl,
                token: 123,
                uid: unionid,
                ...encodedata,
            }
        }

    } else {
        ctx.body = {
            code: 200,
            success: false,
            msg: '缺少code',
        }
    }
}

module.exports = {
    authWxCode2Session,
    authLogin,
    authRegister
}