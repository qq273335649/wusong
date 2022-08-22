const mongoose = require("mongoose");
module.exports = () => {
  mongoose
    .connect("mongodb://175.178.48.234:27017/info", {
      user: "root",
      pass: "a123456",
    })
    .then(() => {
      console.log("连接成功");
    })
    .catch((err) => {
      console.log(err);
      console.log("连接失败");
    });
};
