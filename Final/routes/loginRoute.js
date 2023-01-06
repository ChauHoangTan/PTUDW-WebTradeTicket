const express = require('express')
const route = express.Router();
const controller = require('../controllers/loginController');

route.get('/',(req,res)=>{
    controller.showlogin(req,res);
})

route.post('/view',(req,res) => {
    controller.checkAccount(req,res);
});

module.exports = route;