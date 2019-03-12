const express = require('express');
const asyncHandler = require('../middleware/asyncHandler');
const bcrypt = require('bcrypt');
const _ = require('lodash');
const { User, validate: validateUser } = require('../models/user');
const validateId = require('../models/id');

const router = express.Router();

router.get('/:id', [/* TODO: 권한 확인 미들웨어 추가 */], asyncHandler(async (req, res) => {
  const {error} = validateId(req.params.id);
  if(error) return res.status(404).send('The user with the given id does not exists.');

  const user = await User.findById(req.params.id);
  if(!user) return res.status(404).send('The user with the given id does not exists.');

  res.send(user);
}));

router.get('/', [/* TODO: 권한 확인 미들웨어 추가 */], asyncHandler(async (req, res) => {
  const users = await User.find().select('-password -__v');
  res.send(users);
}));

router.post('/', [/* TODO: 권한 확인 미들웨어 추가 */], asyncHandler(async (req, res) => {
  const { username, password } = req.body;
  const user = { username, password, isManager: false };

  const { error } = validateUser(user);
  if (error) return res.status(400).send(error.details[0].message);

  const userAlreadyExists = await User.findOne({ username });
  if (userAlreadyExists) return res.status(400).send('The user with the given username already exists.');

  const newUser = new User(user);
  const salt = await bcrypt.genSalt(10);
  newUser.password = await bcrypt.hash(newUser.password, salt);
  await newUser.save();
  res.send(_.pick(newUser, ['_id', 'username', 'isManager']));
}));

router.put('/', [/* TODO: 권한 확인 미들웨어 추가 */], asyncHandler((req, res) => {

}));

router.delete('/', [/* TODO: 권한 확인 미들웨어 추가 */], asyncHandler((req, res) => {

}));

module.exports = exports = router;