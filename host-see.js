const express = require('express');
const hostSee = express.Router();

hostSee.get('/add-home', (req, res, next) => {
    res.render('addHome', { title: 'Add Home', currentPage: 'addHome' });
});

const homeDetails = [];

hostSee.post('/add-home', (req, res, next) => {
  homeDetails.push(req.body);
  res.render('homeAdded', { title: 'Home Added', currentPage: 'addHome' });
});

exports.hostSee = hostSee;
exports.homeDetails = homeDetails;