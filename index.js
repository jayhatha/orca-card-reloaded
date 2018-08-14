require('dotenv').config();
const express = require('express');
const bp = require('body-parser');
const expressJWT = require('express-jwt');
const auth = require('./routes/auth');
const user = require('./routes/user');
const card = require('./routes/card');

const port = process.env.PORT || 3000;

const app = express();

app.use(bp.json());
app.use(bp.urlencoded({ extended: false }));

app.use(express.static(`${__dirname}/client/build`));
app.use('/auth', auth);
app.use('/user', expressJWT({ secret: process.env.JWT_SECRET }).unless({ method: 'POST' }), user);
app.use('/card', expressJWT({ secret: process.env.JWT_SECRET }).unless({ method: 'POST' }), card);

app.get('*', (req, res) => {
    res.sendFile(`${__dirname}/client/build/index.html`);
});

const server = app.listen(port, () => {
console.log('You\'re listening to the smooooth sounds of port ' + port)
});

module.exports = server;
