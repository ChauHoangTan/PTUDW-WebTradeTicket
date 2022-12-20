const express = require('express')
const route = express.Router();
const controller = require('../controllers/taikhoanController');

route.get('/', (req, res) => {
    controller.showDetails(req,res);
});

module.exports = route;