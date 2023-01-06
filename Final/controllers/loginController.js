const controller = {};
const express = require('express');
const model = require('../models');

controller.showlogin = (req,res) => {
    res.render('Log-in',{layout:'layout2'});
}

controller.checkAccount = async (req,res)=>{
    let user = await model.Khach_Hang.findAll();
    res.local.userList = user;
}

module.exports = controller;
