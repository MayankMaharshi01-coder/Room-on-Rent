const express = require('express');
const userSee = express.Router();
const { homeDetails } = require('./host-see');

userSee.get('/', (req, res, next) => {
  res.render('home', { homeDetails, title: 'Home', currentPage: 'home' });
});

exports.userSee = userSee;