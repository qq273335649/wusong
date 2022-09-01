const mongoose = require("mongoose");
const { User } = require("./users");

const postsSchema = mongoose.Schema({
  userinfo: User,
  name: String,
  title: String,
  content: String,
});

const Posts = mongoose.model("posts", postsSchema);

module.exports = {
  Posts,
};
