const controller = {};
const model = require('../models');
const Title = "Đăng nhập"

controller.showlogin = async (req,res) => {
    
   

    res.locals.test = ["list1","list2"];

    res.render('Log-in',{layout:'layout2', Title: Title });
}

controller.checkAccount = async (req,res)=>{
    let user = await model.Khach_Hang.findAll();
    res.locals.userList = user;
}

module.exports = controller;
