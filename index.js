const express = require('express');
const winston = require('winston');
const config = require('config');
const mongoose = require('mongoose');

const todosRouter = require('./routes/todos');

const error = require('./middleware/error');
const cors = require('cors');

winston.add(new winston.transports.Console({
  format: winston.format.simple()
}));

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/todos', todosRouter);
app.use(error);

// DB Connection
const uri = config.get('database.url');
mongoose.connect(uri, { useNewUrlParser: true })
  .then((result) => winston.info(`Connected to database: ${uri}`))
  .catch((err) => winston.error(err));

// Start Listening
const port = process.env.PORT || 4000;
app.listen(port, () => winston.info(`Server started listening on port ${port}`))