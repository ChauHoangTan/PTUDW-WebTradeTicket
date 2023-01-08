const express = require('express')
const route = express.Router();
const controller = require('../../controllers/admin/QL_NhaXeController');

// route.get('/', (req, res) => {
//     controller.showDashboard(req,res);
// });

route.get('/', (req, res) => {
    controller.showList(req,res);
});

route.get('/Remove/:id', (req, res) => {
    controller.Remove(req,res);
});


module.exports = route;