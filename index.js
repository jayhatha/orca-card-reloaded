require('dotenv').config();
const express = require('express');
const bp = require('body-parser');
const expressJWT = require('express-jwt');
const auth = require('./routes/auth');
const user = require('./routes/user');
const card = require('./routes/card');
const locked = require('./routes/locked');

const port = process.env.port || 3001;

const app = express();

app.use(bp.json());
app.use(bp.urlencoded({ extended: false }));

app.use(express.static(`${__dirname}/client/build`));
app.use('/auth', auth);
app.use('/user', user);
app.use('/card', card);
app.use('/locked', expressJWT({ secret: process.env.JWT_SECRET }).unless({ method: 'POST' }), locked);

app.get('*', (req, res) => {
    res.sendFile(`${__dirname}/client/build/index.html`);
});

const server = app.listen(port, () => {
console.log('You\'re listening to the smooooth sounds of port ' + port)
});

module.exports = server;
