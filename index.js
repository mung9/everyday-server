const express = require('express');
const winston = require('winston');
const config = require('config');
const mongoose = require('mongoose');
const error = require('./middleware/error');
const cors = require('cors');
const todosRouter = require('./routes/todos');
const usersRouter = require('./routes/users');

winston.add(new winston.transports.Console({
  format: winston.format.simple()
}));

const app = express();

app.use(cors()); // cors허가
app.use(express.json()); // json 요청 가능
app.use('/api/todos', todosRouter); 
app.use('/api/users', usersRouter);
app.use(error); // 요청 처리 중 발생하는 예외 처리

// DB Connection
const uri = config.get('database.url');
mongoose.connect(uri, { useNewUrlParser: true })
  .then((result) => winston.info(`Connected to database: ${uri}`))
  .catch((err) => winston.error(err));

// Start Listening
const port = process.env.PORT || 2000;
app.listen(port, () => winston.info(`Server started listening on port ${port}`))