const controller = {};
const models = require('../../models');
const title = 'Quản lý tuyến xe';

controller.showQL_TuyenXe = async (req, res) => {
    let chuyen_xes = await models.Chuyen_Xe.findAll({
        // include: [
        //     {
        //         model: models.Dia_Diem,
        //         as: Diem_Di,
        //         attributes: ['name'],
        //         // where: {
        //         //     id: chuyen_xes.Diem_Di
        //         // },
        //     },
        //     {
        //         model: models.Dia_Diem,
        //         as: Diem_Den,
        //         attributes: ['name'],
        //         // where: {
        //         //     id: chuyen_xes.Diem_Den
        //         // },
        //     },
        // ],
        include: [
            {
                model: models.Dia_Diem,
                as: 'Diem_Di',
                attribute: [['name', 'ten_Diem_Di']],
                required: true,
            }
        ]
    });
    res.render('admin/QL_TuyenXe', {title, chuyen_xes});
}

module.exports = controller;