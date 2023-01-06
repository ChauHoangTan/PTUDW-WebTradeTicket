const controller = {};
const Title = 'Lịch Sử Đặt Vé';
const models = require('../models')

controller.showHistory = async (req, res) => {

    res.render('lich_su_dat_ve', { Title })
}

module.exports = controller;