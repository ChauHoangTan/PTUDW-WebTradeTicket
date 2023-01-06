const express = require('express')
const route = express.Router();
const controller = require('../../controllers/admin/QL_TuyenXeController');

route.get('/', (req, res) => {
    controller.showQL_TuyenXe(req,res);
});


module.exports = route;
