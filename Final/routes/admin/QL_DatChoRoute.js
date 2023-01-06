const express = require('express')
const route = express.Router();
const controller = require('../../controllers/admin/QL_DatChoController');

route.get('/', (req, res) => {
    controller.showQL_DatCho(req,res);
});

module.exports = route;
