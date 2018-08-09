require('dotenv').config();
const express = require('express');
const router = express.Router();
var db = require('../models');

// /user/cards - this is where we grab their card info and return it to the front end
router.post('/addvalue', (req, res) => {
  console.log('add balance route hit!');
  db.card.update({
    balance: req.body.balance
    }, { where: { id: req.body.id }
  }).then(function(card, err) {
    console.log('callback of database update')
    res.sendStatus(200);
  });
});

module.exports = router;