const controller = {};
const model = require('../models');
const Title = "Đăng ký";


controller.showSignup = async (req,res) =>{
    let user = await model.Khach_Hang.findAll();
    let listUsername = [];
    let listEmail = [];
    for(i = 0; i < Object.keys(user).length; i++){
        listUsername.push(user[i].username);
        listEmail.push(user[i].email);
    }
    
    res.locals.listUsername = listUsername;
    res.locals.listEmail = listEmail;
    res.render('Sign-up',{layout:'layout2', Title: Title });
}

controller.Signup = async (req,res)=>{
    let user = await model.Khach_Hang.findAll();
    let username = req.body.username;
    let email = req.body.email;
    let password = req.body.password;
    let password2 = req.body.password2;
    res.locals.checkPassword = false;
    const { isValidPassword, generateHash } = require('./password');
    for(i = 0; i < Object.keys(user).length; i++){
        if(username == user[i].username ){
            return res.redirect('/signup');
        }
        if(email ==  user[i].email){
            return res.redirect('/signup');
        }
    }

    if (password == password2){
        res.locals.checkPassword = true;
        let khach_hang = {
            email: email,
            username: username,
            password: generateHash(password), 
            usertype:'2'
        }
        console.log(khach_hang);
        khach_hang = await model.Khach_Hang.create(khach_hang);
        res.redirect('/login');
    }
    else{
        return res.redirect('/signup');
    }
}


module.exports = controller;