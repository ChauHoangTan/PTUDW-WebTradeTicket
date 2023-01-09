const express = require('express')
const route = express.Router();
const controller = require('../controllers/logoutController');

route.post('/',(req,res)=>{
    controller.logout(req,res);
})

module.exports = route;