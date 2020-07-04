const cors = require("cors");
const bodyParser = require("body-parser");

module.exports = function (app) {
  app.use(cors());
  app.use(bodyParser.json());
};
