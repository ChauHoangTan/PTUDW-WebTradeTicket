const controller = {};
const models = require('../models');

controller.showList = (req, res) => {
    let Title = 'Danh sách chuyến xe';
    res.render('chuyen_xe', { Title });
}

controller.showDetails= async (req, res) => {
    let Title = 'Chi tiết chuyến xe';

    let id = req.params.id
    let detailsChuyenXe = await models.Chuyen_Xe.findAll({
        where:{
            id: id
        }
    });
    res.render('chuyen_xe', { Title });
    res.send(req.params)
}

module.exports = controller;