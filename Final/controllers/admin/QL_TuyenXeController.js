const controller = {};
const title = 'Quản lý tuyến xe';

controller.showQL_TuyenXe = (req, res) => {
    res.render('admin/QL_TuyenXe', {title});
}

module.exports = controller;