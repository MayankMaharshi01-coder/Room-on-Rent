const express = require('express');
const member = express.Router();
const memberDetails = require('./memberData');

member.get('/member-see', (req, res, next) => {
    res.render('memberSee', { title: 'Adding Member', currentPage: 'members' });
});

member.post('/member', (req, res, next) => {
    memberDetails.push(req.body);
    res.render('memberAdded', { memberDetails, title: 'Members', currentPage: 'member added' })
});

exports.member = member;