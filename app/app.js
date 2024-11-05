require('dotenv').config('../.env');
const express = require('express');
const {notFoundHandler,errorHandler} = require('./error');

const app = express();

const myDb = require('../db/db');
myDb.create('user1',10);
myDb.create('user2',10);
myDb.create('user3',10);
myDb.create('user4',10);
myDb.create('user5',10);
myDb.bulkCreate('user6',10,3);
const tickets = myDb.find();
console.log('all tickets',tickets)
const winners = myDb.draw(2);
console.log('winners',winners);


app.use(require('./middleware'));
app.use(require('./routes'));
app.use(notFoundHandler);
app.use(errorHandler);

module.exports = app;