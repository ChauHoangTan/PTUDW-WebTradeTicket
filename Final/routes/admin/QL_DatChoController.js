const controller = {};
const models = require('../../models');
const Title = 'Quản lý đặt chỗ';

controller.showQL_DatCho = async (req, res) => {
    let dat_chos = await models.Dat_Cho.findAll({
        include: [
            {
                model: models.CT_Dat_Cho,
                required: true,
                include: [{
                    model: models.Ghe,
                    required: true
                }]
            },
            {
                model: models.Khach_Hang,
                required: true,
                include: [{
                    model: models.Tai_Khoan,
                    required: true
                }]
            }
        ]
    })
    res.render('admin/QL_DatCho', { dat_chos, Title });
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