const express = require('express')
const route = express.Router();
const controller = require('../controllers/signupController');
const models = require('../models');

route.get('/',(req,res)=>{
    controller.showSignup(req,res);
})

route.post('/',(req,res)=>{
    controller.Signup(req,res);
})

module.exports = route;