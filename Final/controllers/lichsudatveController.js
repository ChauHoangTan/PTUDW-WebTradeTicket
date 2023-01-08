const controller = {};
const Title = 'Lịch Sử Đặt Vé';
const models = require('../models')

controller.showHistory = async (req, res) => {

    let lich_su_dat_ve = await models.Dat_Cho.findAll({
        where:{
            KhachHangId: 1
            
        },
        include: [{
            model:models.CT_Dat_Cho,
            required: true,
            include: [{
                model:models.Chuyen_Xe,
                required: true,
            }]
        }]

        
    })

   

    res.send(lich_su_dat_ve[1])
    
    //res.render('lich_su_dat_ve', { Title })
}

module.exports = controller;