const controller = {};
const title = 'Quản lý nhà xe';
const models = require('../../models');

controller.showDashboard = (req, res) => {
    res.render('QL_NhaXe', { title });
}

controller.showList = async (req, res) => {
    let nha_xes = await models.Nha_Xe.findAll();
    res.render('QL_NhaXe', { title, nha_xes });
}

controller.Remove = (req, res) => {
    models.Nha_Xe.destroy({
        where: {
            id: req.params.id
        }
    }).then(() => {
        res.redirect('QL_NhaXe');
    });
}

controller.Add = (req, res) => {
    models.Nha_Xe.create({
        ten_Nha_Xe: req.body.name,
        So_Luong_Xe: req.body.soXe,
        SDT: req.body.soDienThoai
    }).then(() => {
        res.redirect('QL_NhaXe');
    });
}


controller.Edit = (req, res) => {
    models.Nha_Xe.update({
        ten_Nha_Xe: req.body.name,
        So_Luong_Xe: req.body.soXe,
        SDT: req.body.soDienThoai
    }, {
        where: {
            id: req.params.id
        }
    }).then(() => {
        res.redirect('QL_NhaXe');
    });
}

module.exports = controller;

