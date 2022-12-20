const controller = {};
const Title = 'Đặt vé';

controller.showDetails = (req, res) => {
    res.render('dat_ve', { Title });
}

module.exports = controller;