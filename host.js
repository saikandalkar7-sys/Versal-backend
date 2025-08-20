const express = require('express');
const host = express.Router();

const controler=require('./controllers/userController');

host.use(express.urlencoded({ extended: true }));

host.get('/add-home', controler.gethost);

host.post('/submit', controler.posthost); 

module.exports = { host };

