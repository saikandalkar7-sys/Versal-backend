const express = require('express');
const user = express.Router();
const controler=require('./controllers/userController');
user.get('/', controler.getuser); 
user.get('/workers',controler.getworkers);
user.get('/booking',controler.getbooking); 
user.get('/home/:homeid',controler.gethomeid);
user.get('/host-home',controler.hosthome);
module.exports = user; // ✅ EXPORT ONLY THE ROUTER
