const express = require('express')
const route = express.Router();
const controller = require('../controllers/setpasswordController');
const Title = "Đặt lại mật khẩu"
const model = require('../models');

route.get('/', (req, res) => {
    res.render('Set-password',{layout:'layout2', Title: Title});
    
});

route.post('/',(req,res) => {
    let email = req.body.mail;
    let token = req.body.token;
    console.log(email);
    controller.setPassword(req,res,email,token);
});

module.exports = route;
