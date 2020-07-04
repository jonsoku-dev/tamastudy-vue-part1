const path = require("path");
const express = require("express");
const app = express();
require("./startup/logging")();
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });
require("./startup/middleware")(app);
require("./startup/routes")(app);
require("./startup/db")();

// static
app.use(express.static(path.join(__dirname, "..", "public")));

// 서버 실행
const PORT = process.env.NODE_PORT || 5001;
app.listen(PORT, () => {
  console.log(`${PORT}번으로 접속하였습니다.`);
});
