const express = require('express')
const route = express.Router();
const controller = require('../../controllers/admin/DashboardController');

route.get('/', (req, res) => {
    controller.showDashboard(req,res);
});


module.exports = route;
