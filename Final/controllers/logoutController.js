const controller = {};
const model = require('../models');

controller.logout =(req,res)=>{
    res.locals.UserId = '';
    req.session.destroy(error => {
        if(error){
            return next(error);
        }
        return res.redirect('/login');
    })
    
}

module.exports = controller;