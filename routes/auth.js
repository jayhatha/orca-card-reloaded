require('dotenv').config();
const express = require('express');
const router = express.Router();
var db = require('../models');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

router.post('/signup', (req, res) => {
  db.user
    .findOrCreate({
      where: { email: req.body.email },
      defaults: {
        username: req.body.username,
        password: req.body.password,
        first: req.body.first,
        last: req.body.last,
        phone: req.body.phone,
        dob: req.body.dob,
        street: req.body.street,
        city: req.body.city,
        state: req.body.state,
        zip: req.body.zip,
        question: req.body.question,
        answer: req.body.answer
      }
    })
    .spread(function(user, created) {
      if (created) {
        // no record was found, so we created one
        console.log("><><>< JUST ABOUT TO SIGN THE TOKEN ><><><");
        var token = jwt.sign(user.toJSON(), process.env.JWT_SECRET, {
          expiresIn: 60 * 60 * 24
        });
        let cvv = Math.floor(Math.random() * (999 - 100 + 1) + 100);
        db.card.create({
          userId: user.id,
          cvv: cvv.toString(),
          balance: 0,
          isactive: true,
          passenger_type: 'adult'
        });
        res.json({ user, token });
      } else {
        // we found a record, so they can't use that email
        res.json({
          error: true,
          message: 'That email address is already in use.'
        });
      }
    }).catch(function (err) {
      console.log(err);
      res.json({
        error: true,
        message: err.errors[0].message
      });
});
});

router.post("/login", (req, res) => {
  // Look up user in DB by email
  db.user.find({ where: { email: req.body.email } }).then(function(user, err) {
    if (user) {
      // if user: check password input against hash
      let hash = user.password;
      if (bcrypt.compareSync(req.body.password, hash)) {
        // if match: sign a token
        var token = jwt.sign(user.toJSON(), process.env.JWT_SECRET, {
          expiresIn: 60 * 60 * 24
        });
        res.json({ user, token });
      } else {
        // else send error to frontend
        console.log('else - password is wrong')
        res.json({
          error: true,
          message: 'Email or password is incorrect.'
        });
      }
    } else {
      // else send error to frontend
      console.log('else - no user found')
      res.json({
        error: true,
        message: 'Email or password is incorrect.'
      });
    }
  });
});

router.post('/me/from/token', (req, res) => {
  const token = req.body.token;
  // check for presence of a token
  if (!token) {
    // no token sent
    res.status(401).json({
      error: true,
      message: 'You must pass a token'
    });
  } else {
    // token sent
    // validate the token
    jwt.verify(token, process.env.JWT_SECRET, function (err, user) {
      if (err) {
        res.status(401).json(err);
      } else {
        db.user.find({ where: { id: user.id } }).then(function (user) {
          // if valid: lookup user in DB based on token info => send user and token back to frontend
          // else: send err
          if (!user) {
            res.status(401).json(err);
          } else {
            res.json({ user, token });
          }
        });
      }
    });
  }
});

module.exports = router;
