/*
 * @Author: your name
 * @Date: 2022-02-18 10:50:14
 * @LastEditTime: 2022-02-18 16:24:41
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \vue\ws-koa2app\controller\token\addtoken.js
 */
//添加token
const jwt = require('jsonwebtoken');
const secret = 'WS_TOKEN';  //密钥，不能丢
/**
 * @description: 
 * @param {*} userinfo
 * @return {*}
 */
module.exports = {
  addtoken: (userinfo) => { //创建token并导出
    const token = jwt.sign({
      ...userinfo,
    }, secret,
      {
        expiresIn: '168h' // token一周后过期
        // expiresIn: '24h'
      });
    return token;
  },
  secret
}