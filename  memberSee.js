const express = require('express');
const memberSee = express.Router();
const memberDetails = require('./memberData');

memberSee.get('/member', (req, res, next) => {
    res.render('member', { memberDetails: memberDetails, title: 'Member Details', currentPage: 'member' });
});

exports.memberSee = memberSee;