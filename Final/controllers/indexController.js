const controller = {};
const Title = 'Trang chủ VeXeMac';

controller.showHome = (req, res) => {
    res.render('index', { Title });
}

module.exports = controller;