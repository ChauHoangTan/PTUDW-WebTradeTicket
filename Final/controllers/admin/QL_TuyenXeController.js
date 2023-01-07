const controller = {};
const models = require('../../models');
const title = 'Quản lý tuyến xe';

controller.showQL_TuyenXe = async (req, res) => {
    let chuyen_xes = await models.Chuyen_Xe.findAll();
    res.render('admin/QL_TuyenXe', {title, chuyen_xes});
}

module.exports = controller;