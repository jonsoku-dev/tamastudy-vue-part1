const userRouter = require("../routes/user.route");
const postRouter = require("../routes/post.route");
const errorHandler = require("../utils/errorHandler");

module.exports = function (app) {
  app.use("/user", userRouter);
  app.use("/post", postRouter);
  app.use(errorHandler);
};
