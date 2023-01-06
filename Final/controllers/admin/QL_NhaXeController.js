const controller = {};
const title = 'Quản lý nhà xe';
const models = require('../../models');

controller.showDashboard = (req, res) => {
    res.render('admin/QL_NhaXe', {title});
}

controller.showList = async (req, res) => {
    let nha_xes = await models.Nha_Xe.findAll();
    res.render('admin/QL_NhaXe', { title, nha_xes });
}

module.exports = controller;

