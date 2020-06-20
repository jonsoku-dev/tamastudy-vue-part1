const roleChecker = (...role) => (req, res, next) => {
  if (role.includes(req.role)) {
    // 다음 함수로 넘어간다.
    next();
  } else {
    // 에러핸들러 유틸함수로 넘어간다. (에러관련 response)
    return next('접근 불가 에러입니다. ');
  }
};

module.exports = roleChecker;
