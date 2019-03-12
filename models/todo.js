const mongoose = require('mongoose');
const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);

const now = new Date();
const minDate = new Date(now);
minDate.setFullYear(now.getFullYear() - 50);
const maxDate = new Date();
maxDate.setFullYear(now.getFullYear() + 50);

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,

  },
  date: {
    type: Date,
    min: minDate.getTime(),
    max: maxDate.getTime(),
    required: true,
  },
  isCompleted: {
    type: Boolean,
    default: false
  },
  completedDate: {
    type: Date,
    min: minDate.getTime(),
    max: maxDate.getTime(),
    default: null,
  },
  regDate:{
    type: Date,
    default: Date.now()
  }
});

const Todo = mongoose.model('Todo', todoSchema);

function validate(todo) {
  const minTime = minDate.getTime(),
        maxTime = maxDate.getTime();
  const schema = {
    _id: Joi.objectId(),
    title: Joi.string().required(),
    date: Joi.date().min(minTime).max(maxTime),
    isCompleted: Joi.boolean().default(false),
    completedDate: Joi.date().min(minTime).max(maxTime),
    regDate: Joi.date().default(Date.now()),
  };

  return Joi.validate(todo, schema);
}

module.exports = exports = {
  Todo,
  validateTodo: validate
};