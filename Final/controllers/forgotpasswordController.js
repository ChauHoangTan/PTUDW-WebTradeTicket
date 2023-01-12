const controller = {};
const model = require('../models');
const Title = "Quên mật khẩu"
let jwt = require('jsonwebtoken');
const { default: Mailjet } = require('node-mailjet');
const SECRET_KEY = "VeXeMacSK";

controller.showForgotpassword = async (req,res) => {
    let user = await model.Khach_Hang.findAll();
    let listEmail = []
    for(i = 0; i < Object.keys(user).length; i++){
        listEmail.push(user[i].email);
    }
   
    res.locals.listEmail = listEmail;
    res.render('Forgot-Password',{layout:'layout2', Title: Title });
}

controller.checkEmail = async(req,res) => {
    let user = await model.Khach_Hang.findAll();
    let emailInput = req.body.email;
    for(i = 0; i < Object.keys(user).length; i++){
        if(emailInput == user[i].email){
            return res.redirect('/login');
            
        }
    }
    return res.redirect('/forgotpassword');
}

controller.getUserByEmail = async(req,res) =>{
    let userList = await model.Khach_Hang.findAll();
    let emailInput = req.body.email;
    for(i = 0; i < Object.keys(userList).length; i++){
        if(emailInput == userList[i].email){
            let user = userList[i];
            return user;
        }
    }
    return false;
}

controller.createJWT = (email) =>{
    return jwt.sign(
    { email },
    SECRET_KEY,
    { expiresIn: "30m"});

}

controller.verifyJWT = (token)=>{
    try{
        jwt.verify(token, SECRET_KEY);
        return true;
    } catch(error){
        return false;
    }
}

controller.sendResetPasswordMail = (user, host, url) => {
    const Mailjet = require('node-mailjet');
    const mailjet = Mailjet.apiConnect(
        process.env.MJ_APIKEY_PUBLIC || 'f89f40391961e3c325dfb590e8a8f970',
        process.env.MJ_APIKEY_PRIVATE || '82b2753c18ac3b18d59a805fd052be27',
    );
    const request = mailjet
        .post('send', { version: 'v3.1' })
        .request({
          Messages: [
            {
              From: {
                Email: "hualamchicuong@gmail.com",
                Name: "VeXeMac"
              },
              To: [
                {
                  Email: user.email,
                  Name: user.Ho_Ten
                }
              ],
              Subject: "Reset Password",
              HTMLPart: `
              <p>Hi ${user.Ho_Ten},</p>
              
              <p>You recently requested to reset the password for your ${host} account. Click the link below to proceed.</p>
              <br/>
              <p><a href="${url}">Reset password</a></p>
              <br/>
              <p>If you did not request a password reset, please ignore this email or reply to let us know. This password reset link is only valid for the next 30 minutes.</p>
              <br/>
              <p>Thanks,</p> 
              <p>VeXeMac</p>`
            }
          ]
        })
    return request;
}

module.exports = controller;