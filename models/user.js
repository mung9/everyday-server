const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const _ = require('lodash');
const config = require('config');
const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: [true, 'username is required.'],
    validate: {
      validator: (v) => {
        const emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        return emailRegex.test(v);
      },
      message: props => `${props.value} is invalid email form.`
    }
  },
  password: {
    type: String,
    min: [5, 'Too short password.'],
    max: [20, 'Too long to type in, isn\'t it?']
  },
  regDate: {
    type: Date,
    default: Date.now()
  },
  isManager: {
    type: Boolean,
    default: false
  }
});

userSchema.methods.createToken = function () {
  return jwt.sign(_.pick(this, ['username', 'isManager']), config.get('jwtKey'));
}

const User = mongoose.model("User", userSchema);

const schema = {
  username: Joi.string().email().required(),
  password: Joi.string().min(5).max(20),
  regDate: Joi.date().default(new Date()),
  isManager: Joi.bool().default(false)
}
function validate(user) {
  return Joi.validate(user, schema);
}

module.exports = exports = { User, validate };