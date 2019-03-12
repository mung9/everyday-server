const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);

const schema = {
  id: Joi.objectId().required()
}

module.exports = exports = function (id) {
  return Joi.validate({ id }, schema);
}