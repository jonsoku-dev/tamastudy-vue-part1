const sample = (req, res, next) => {
  console.log("**** 미들웨어를 통과하였습니다.  ****".blue);
  next();
};

module.exports = sample;
