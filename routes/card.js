require('dotenv').config();
const express = require('express');
const router = express.Router();
var db = require('../models');

// /user/cards - this is where we grab their card info and return it to the front end
router.post('/addvalue', (req, res) => {
  db.card.update({
    balance: req.body.balance
    }, { where: { id: req.body.cardId }
  }).then(function(card, err) {
    res.json({card: card});
  });
});

module.exports = router;