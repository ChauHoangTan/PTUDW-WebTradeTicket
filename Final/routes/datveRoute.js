const express = require('express')
const route = express.Router();
const controller = require('../controllers/datveController');

route.get('/', (req, res) => {
    controller.showDetails(req,res);
});

module.exports = route;