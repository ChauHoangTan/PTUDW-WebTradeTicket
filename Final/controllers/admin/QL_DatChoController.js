const controller = {};
const models = require('../../models');
const Title = 'Quản lý đặt chỗ';

controller.showQL_DatCho = async (req, res) => {
    res.render('admin/QL_DatCho', { Title, Dat_Cho})
}

controller.Remove = async (req, res) => {
    models.Dat_Cho.destroy({
        where: {
            id: req.params.id
        }
    }).then(() => {
        res.redirect('/QL_DatCho');
    }
    );
}

module.exports = controller;