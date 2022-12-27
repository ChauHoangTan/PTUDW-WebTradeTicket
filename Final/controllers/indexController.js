const controller = {};
const Title = 'Trang chủ VeXeMac';
const models = require('../models');

controller.showHome = async (req, res) => {
    const dia_diems = await models.Dia_Diem.findAll();
    res.render('index', { Title, dia_diems });
}

module.exports = controller;