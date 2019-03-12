const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('config');
const express = require('express');

module.exports = exports = function (req, res, next) {
  const token = req.headers['x-access-token'] || req.query.token;
  if(!token) res.status(401).send('Unauthorized')

  try {
    const decoded = jwt.verify(token, config.get('jwtKey'));
    req.user = decoded;
  } catch (error) {
    console.log(error);
    res.status(400).send('Invalid token');
  }
}