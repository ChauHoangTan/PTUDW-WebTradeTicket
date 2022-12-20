const controller = {};
const Title = 'Tìm kiếm chuyến xe';

controller.showResultList = (req, res) => {
    res.render('tim_kiem', { Title });
}

module.exports = controller;