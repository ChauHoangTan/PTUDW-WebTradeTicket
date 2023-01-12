const express = require('express')
const route = express.Router();
const controller = require('../controllers/setpasswordController');
const userController = require('../controllers/forgotpasswordController');
const Title = "Đặt lại mật khẩu"
const model = require('../models');

route.get('/', (req, res) => {
    let email = req.query.u;
    let token = req.query.t;
    res.render('Set-password',{layout:'layout2', Title: Title, email ,token});
    
});

route.post('/',(req,res) => {
    let email = req.body.email;
    let token = req.body.token
    console.log(email);
    controller.setPassword(req,res,email,token);
});

module.exports = route;