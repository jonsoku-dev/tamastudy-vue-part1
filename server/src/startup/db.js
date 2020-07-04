const mongoose = require("mongoose");
const winston = require("winston");

module.exports = async () => {
  const MONGO_URI = process.env.MONGO_URI;
  if (!MONGO_URI) {
    process.exit(1);
  }
  try {
    await mongoose.connect(MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    winston.info(`몽고디비에 접속하였습니다.`);
  } catch (err) {
    if (err) {
      winston.info(`${err}`);
    }
  }
};
