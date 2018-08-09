require('dotenv').config();
const express = require('express');
const router = express.Router();
var db = require('../models');

// Updates a user's card balance
router.post('/addvalue', (req, res) => {
  db.card.update({
    balance: req.body.balance
    }, { where: { id: req.body.id }
  }).then(function(card, err) {
    res.sendStatus(200);
  });
});

// Updates the auto_reload feature with a new amount
router.post('/auto_reload', (req, res) => {
  db.card.update({
    auto_reload: req.body.auto_reload
    }, { where: { id: req.body.id }
  }).then(function(card, err) {
    res.sendStatus(200);
  });
});

// Adds a new pass to the user's card
router.post('/addpass', (req, res) => {
  db.card.update({
    pass: req.body.pass
    }, { where: { id: req.body.id }
  }).then(function(card, err) {
    res.sendStatus(200);
  });
});

module.exports = router;
