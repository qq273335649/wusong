const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: String,
  password: String,
  sex: String,
  birthday: Date,
  photo: String,
  phone: String,
});

const User = mongoose.model("users", userSchema);

module.exports = {
  User,
};
