require('dotenv').config();
const express = require('express');
const router = express.Router();
var db = require('../models');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const tokenForUser = (user) => {
  const timestamp = new Date().getTime();
  return jwt.encode({sub: user.id, iat: timestamp}, process.env.JWT_SECRET);
};

const signin = (req, res, next) => {
  res.send({ token: tokenForUser(req.user) });
};

const signup = (req, res, next) => {
  const {username, email, password} = req.body;
  const saltRounds = 12;

  if (!email || !password) {
    res.status(422).send({error: 'You must provide an email and a password.'});
  }

  bcrypt.hash(password, saltRounds)
    .then((hash) => {
      return createUser(name, email, hash)
        .then((newUser) => {
          res.json({token: tokenForUser(newUser)});
        })
        .catch((err) => {
          res.json({error: 'Error saving user to database.'});
        })
    })
    .catch((err) => {
      return next(err);
    });
}


router.post('/signup', (req, res) => {
  db.user.findOrCreate({
    where: { email: req.body.email },
    defaults: {
      username: req.body.name,
      password: req.body.password
    }
  }).spread(function (user, created) {
    if (created) {
      // no record was found, so we created one
      console.log('><><>< JUST ABOUT TO SIGN THE TOKEN ><><><');
      var token = jwt.sign(user.toJSON(), process.env.JWT_SECRET, {expiresIn: 60 * 60 * 24});
      // return user and token to frontend app
      res.json({user, token});
    } else {
      // we found a record, so they can't use that email
      console.log('We got an error creating the user');
      console.log(err);
      res.status(401).json(err);
    }
  // }).catch(function (error) {
  //   // catch any additional errors
  //   console.log('There was a problem creating the account.');
  //   res.status(401).json(error);
  });
});

router.post('/login', (req, res) => {
  // Look up user in DB by email
  db.user.find({where: { email: req.body.email }}, function (err, user) {
    if (user) {
      // if user: check password input against hash
      console.log('found user ' + user + ', about to check password');
      if (user.authenticated(req.body.password)) {
        // if match: sign a token
        var token = jwt.sign(user.toJSON(), process.env.JWT_SECRET, {
          expiresIn: 60 * 60 * 24
        });
        res.json({user, token});
      } else {
        // else send error to frontend
        res.status(401).json({
          error: true,
          message: 'Email or password is incorrect.'
        })
      }
    } else {
      // else send error to frontend
      res.status(401).json(err);
    }
  })
})

router.post('/me/from/token', (req, res) => {
  let token = req.body.token;
  // check for presence of a token
  if (!token) {
    // no token sent
    res.status(401).json({
      error: true,
      message: 'You must pass a token'
    })
  } else {
    // token sent
    // validate the token
    jwt.verify(token, process.env.JWT_SECRET, function (err, user) {
      if (err) {
        res.status(401).json(err);
      } else {
        db.user.find(id, function(err, user) {
          // if valid: lookup user in DB based on token info => send user and token back to frontend
          // else: send err
          if (err) {
            res.status(401).json(err);
          } else {
            res.json({user, token});
          }
        })
      }
    })
  }
})

module.exports = router;
