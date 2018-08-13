require('dotenv').config();
const express = require('express');
const router = express.Router();
var db = require('../models');

// /user/cards - this is where we grab their card info and return it to the front end
router.post('/cards', (req, res) => {
  db.card.find({ where: { userId: req.body.id }, include: [db.activity] }).then(function(card, err) {
    res.json({card: card});
})
})

// router.put('/editinfo', (req, res) {
//   db.user.find({ where: {id: req.body.id }}).then(function(user, err) {
//
//     res.json({user: user});
// })
// })

module.exports = router;
