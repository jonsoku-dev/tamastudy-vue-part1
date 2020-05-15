const sample = (req, res, next) => {
  console.log('**** 미들웨어를 통과하였습니다.  ****'.blue);
  req.role = 'admin';
  next();
};

module.exports = sample;
