const controller = {};
const Title = 'Tài khoản cá nhân';

controller.showDetails = (req, res) => {
    res.render('tai_khoan', { Title })
}

module.exports = controller;