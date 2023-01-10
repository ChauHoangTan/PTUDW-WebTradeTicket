const controller = {};
const model = require('../models');
const Title = "Đăng nhập"

controller.showlogin = async (req,res) => {
    let user = await model.Khach_Hang.findAll();
    let listUsername = []
    let listPassword = []
    for(i = 0; i < Object.keys(user).length; i++){
        listUsername.push(user[i].username);
        listPassword.push(user[i].password);
    }
   
    res.locals.listUsername = listUsername;
    res.locals.listPassword = listPassword;

    console.log(listUsername);

    res.render('Log-in',{layout:'layout2', Title: Title });
}

controller.checkAccount = async (req,res)=>{
    let user = await model.Khach_Hang.findAll();
    const { isValidPassword, generateHash } = require('./password');
    let username = req.body.username;
    let password = req.body.password;

    for(i = 0; i < Object.keys(user).length; i++){
        if(username == user[i].username && isValidPassword(password, user[i].password)){
            if(user[i].usertype == 1){
                req.session.userId = user[i].id
                res.redirect('/Dashboard');
                break;
            }
            else{
                req.session.userId = user[i].id
                res.redirect('/');
                break;
            }
        }
    }

}

module.exports = controller;
