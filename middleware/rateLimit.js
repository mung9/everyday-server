const rateLimit = require('express-rate-limit');

// only if you're behind a reverse proxy (Heroku, Bluemix, AWS ELB, Nginx, etc)
//app.enable("trust proxy"); 

module.exports = exports = function (app, url, seconds, max, handler, ...args) {
  const windowMs = seconds * 1000;
  const limiter = rateLimit({ windowMs, max, handler, ...args });
  app.use(url || '/', limiter);
}