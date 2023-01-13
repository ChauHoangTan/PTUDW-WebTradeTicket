const express = require('express')
const route = express.Router();
const controller = require('../controllers/forgotpasswordController');
const Title = "Đặt lại mật khẩu"

route.get('/', (req, res) => {
    controller.showForgotpassword(req,res);
});

route.post('/',(req, res, next) => {

    controller.getUserByEmail(req,res)
        .then(user => {
            let email = user.email;
            if(user){
                let token = controller.createJWT(email);
                let host = req.header('host');
                let url = `${req.protocol}://${host}/setpassword?u=${email}&t=${token}`;
                controller.sendResetPasswordMail(user,host,url)
                    .then(request => {
                        return res.render('Forgot-Password',{
                            done: 1,
                            email,
                            layout:'layout2',
                            Title: Title
                    })
                    // .catch(err => {
                    //     return res.render('Forgot-Password',{
                    //         message: 'Error when trying to send your mail. Please try again',
                    //         type: 'alert-danger',
                    //         email,
                    //         layout:'layout2', Title: Title
                    //     })
                    // })
                });
            }
            else{
                return res.render('Forgot-Password',{
                    email,
                    layout:'layout2', 
                    Title: Title
                })
            }
        })
        .catch(error => next(error));
});


module.exports = route;