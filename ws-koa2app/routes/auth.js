/*
 * @Author: your name
 * @Date: 2022-02-21 11:08:02
 * @LastEditTime: 2022-02-21 11:18:17
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \vue\ws-koa2app\routes\login.js
 */
const router = require('koa-router')()
router.prefix('/auth')
const authCtl = require('../controller/auth');
router.post('/login', authCtl.authLogin);
router.post('/register', authCtl.authRegister);

module.exports = router