const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config({ path: '../.env' });
require('colors');

// 미들웨어
const sample = require('./middlewares/sample.middleware');
// 라우트
const routes = require('./routes');
// 에러핸들러
const errorHandler = require('./utils/errorHandler');

const app = express();

// static
app.use(express.static(path.join(__dirname, 'public')));

// 미들웨어
app.use(sample);
app.use(cors());
app.use(bodyParser.json());

// 라우트
app.use('/', routes);

// 에러핸들링
app.use(errorHandler);

// 서버 실행
const PORT = 5001;
app.listen(PORT, () => {
  console.log(`${PORT}번으로 접속하였습니다.`.bgBlack.white);
  // 데이터베이스 실행
  const MONGO_URI = process.env.MONGO_URI || '';
  // mongoose.set('debug', true);
  mongoose
    .connect(
      MONGO_URI,
      {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
      },
      (err) => {
        if (err) {
          console.log(`${err}`.bgRed.white);
        }
      },
    )
    .then(() => {
      console.log(`몽고디비에 접속하였습니다.`.bgBlue.white);
    });
});
