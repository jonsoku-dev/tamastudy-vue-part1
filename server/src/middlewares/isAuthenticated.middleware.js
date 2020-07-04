const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  let token;
  if (req.headers.authorization) {
    token = req.headers.authorization.split(" ")[1];
  }
  if (token) {
    try {
      const currentUser = jwt.verify(token, process.env.NODE_JWT_SECRET);
      req.user = currentUser;
      console.log("***** isAuthenticated middleware 통과!!!!! *****");
      next();
    } catch (error) {
      req.user = undefined;
      res.sendStatus(401);
    }
  } else {
    req.user = undefined;
    res.sendStatus(401);
  }
};
