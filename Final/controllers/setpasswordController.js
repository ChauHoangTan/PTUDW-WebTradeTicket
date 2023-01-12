const controller = {};
const model = require('../models');
const Title = "Đặt lại mật khẩu"
const userController = require('../controllers/forgotpasswordController');

controller.showSetpassword =  (req,res) =>{
    res.render('Set-password',{layout:'layout2', Title: Title });
}

controller.setPassword = async (req,res, email, token) =>{
    let isVerify = userController.verifyJWT(token);
    let password = req.body.password;
    let password2 = req.body.password2;
    console.log(email);
    const { isValidPassword, generateHash } = require('../controllers/password');
    if(isVerify){
        if (password == password2){
            const newPassword = await model.Khach_Hang.update({
                password : generateHash(password)
            },
            {
            where: {
                email: email
            }
            })
            return res.redirect('/login')
        }
        return res.render('Set-password',{layout:'layout2', Title: Title});
    }
    else{
        return res.redirect('/forgotpassword')
    }
    
}   

    



module.exports = controller;