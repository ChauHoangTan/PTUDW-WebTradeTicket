const controller = {};
const title = 'Quản lý nhà xe';
const model = require('../../models/nha_xe');

controller.showDashboard = (req, res) => {
    res.render('admin/QL_NhaXe', {title});
}

controller.showList = async (req, res) => {
    let Title = 'Danh sách nhà xe';
    let nha_xes = await model.nha_xes.findAll();
    res.render('admin/QL_NhaXe', { Title, nha_xes });
}

module.exports = controller;

