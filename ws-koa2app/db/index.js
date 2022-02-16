const mongoose = require('mongoose');
module.exports = () => {
    mongoose.connect('mongodb://localhost:27017/info',{}).then(() => {
        console.log("连接成功");
    }).catch((err) => {
        console.log(err);
        console.log("连接失败");
    })
}
