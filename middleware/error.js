module.exports = exports = function (error, req, res, next) {
  res.status(500).send(error);
}