const express = require('express');
const path = require('path');

const router = express.Router();

router.use('/static', (req,res)=>{
  express.static(path.join(__dirname, '../public/static'))(req,res);
});

router.get('/todo', (req,res)=>{
  res.sendFile(path.join(__dirname,'../public/index.html'));
});

router.use(express.static('public'));

module.exports = exports = router;