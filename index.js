require('express-async-errors');
const express = require('express');
const winston = require('winston');
const config = require('config');
const mongoose = require('mongoose');
const cors = require('cors');

process.on('uncaughtException', (ex) => {
  winston.error(ex);
  process.exit(1);
});

process.on('unhandledRejection', (ex) => {
  winston.error(ex);
  process.exit(1);
});

winston.add(new winston.transports.Console({
  format: winston.format.simple()
}));

const app = express();

app.use(cors()); // cors허가
require('./middleware/rateLimit')(app, 60, 5); // 요청 횟수 제한: 1분에 5번
app.use(express.json()); // json 요청 가능
require('./middleware/routes')(app);
require('./middleware/error')(app);

const jwtKey=  config.get('jwtKey');
console.log(jwtKey);
if(!jwtKey){
  process.exit(1);
}

// DB Connection
const uri = config.get('database.url');
mongoose.connect(uri, { useNewUrlParser: true })
  .then((result) => winston.info(`Connected to database: ${uri}`))
  .catch((err) => winston.error(err));

// Start Listening
const port = process.env.PORT || 2000;
app.listen(port, () => winston.info(`Server started listening on port ${port}`))