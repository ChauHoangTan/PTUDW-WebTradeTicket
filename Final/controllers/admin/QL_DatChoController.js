const controller = {};
const Title = 'Quản lý đặt chỗ';

controller.showQL_DatCho = async (req, res) => {
    res.render('admin/QL_DatCho', { Title })
}

module.exports = controller;