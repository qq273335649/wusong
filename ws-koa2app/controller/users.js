const { User } = require('../models/users');

const userAdd = async function (ctx, next) {
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
}

const userDel = async function (ctx) {
    console.log(ctx.request.body);
    ctx.body = '删除';
}
const userEdit = async () => {
    const { } = ctx.request.body
    ctx.body = '修改'
}
const userFind = async (ctx) => {
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
}
const userFindOne = async (ctx) => {
    // await User.findOne({_id:ctx.params.id});
    ctx.body = '查询一条'
}
module.exports = {
    userAdd,
    userDel,
    userEdit,
    userFind,
    userFindOne
}