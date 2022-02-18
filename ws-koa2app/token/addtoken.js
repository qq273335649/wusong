//添加token
const jwt = require('jsonwebtoken');
const serect = 'token';  //密钥，不能丢
module.exports = (userinfo) => { //创建token并导出
  const token = jwt.sign({
    name: userinfo.name,
    id: userinfo.id
  }, serect, {expiresIn: '24h'});
  return token;
};