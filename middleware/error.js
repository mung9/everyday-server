const winston = require('winston');
const winstonError = require('winston-error');
//winstonError(winston);

module.exports = exports = function (app) {
  app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).send('Something failed');
  });
}