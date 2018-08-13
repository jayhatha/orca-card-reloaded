require("dotenv").config();
const express = require("express");
const router = express.Router();
var db = require("../models");

// /user/cards - this is where we grab their card info and return it to the front end
router.post("/cards", (req, res) => {
  db.card
    .find({ where: { userId: req.body.id }, include: [db.activity] })
    .then(function(card, err) {
      res.json({ card: card });
    });
});

router.post("/edit", (req, res) => {
  db.user.update(
      {
        first: req.body.first,
        last: req.body.last,
        phone: req.body.phone,
        dob: req.body.dob,
        street: req.body.street,
        city: req.body.city,
        state: req.body.state,
        zip: req.body.zip,
        email: req.body.email
      },
      {
  where: { id: req.body.id },
  returning: true,
  plain: true
})
.then(function (result) {
  console.log(result[1])
  res.json({user: result[1]})
  // result = [x] or [x, y]
  // [x] if you're not using Postgres
  // [x, y] if you are using Postgres
});

})

module.exports = router;
