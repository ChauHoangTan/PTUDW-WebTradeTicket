const controller = {};
const models = require('../models');

controller.showList = (req, res) => {
    let Title = 'Danh sách chuyến xe';
    res.render('chuyen_xe', { Title });
}

controller.showDetails= async (req, res) => {
    let Title = 'Chi tiết chuyến xe';

    // lấy id từ params
    let id = req.params.id

    // lấy dữ liệu bảng chuyến xe từ id
    let detailsChuyenXe = await models.Chuyen_Xe.findOne({
        where:{
            id: id
        }
    });
    res.locals.detailsChuyenXe
    //res.render('chuyen_xe', { Title });
    
    // lấy dữ liệu bảng nhà xe từ NhaXeId của bảng chuyến xe
    let getNhaXe = await models.Nha_Xe.findOne({
        where:{
            id : detailsChuyenXe.NhaXeId
        }
    })
    res.locals.getNhaXe

    // lấy cái hình ảnh nhà xe từ khóa ngoại NhaXeId của bảng nhà xe
    let getImage = await models.Nha_Xe_IMG.findAll({
        where:{
            NhaXeId: getNhaXe.id
        }
    })
    res.locals.getImage

    // lấy dữ liệu về xe của chuyến xe
    let getXe = await models.Xe.findOne({
        where:{
            id : detailsChuyenXe.XeId
        }
    })
    res.locals.getXe

    // lấy dữ liệu loại xe của chuyến xe
    let getLoaiXe = await models.Loai_Xe.findOne({
        where:{
            id: getXe.LoaiXeId
        }
    })
    res.locals.getLoaiXe

    // chuyển đổi từ dạng hh:mm:ss sang hh cho dễ xài
    function convertTimeToString(time, Tong_Thoi_Gian_Hanh_Trinh){
        let hourStart = time.slice(0,2)

        let intHourStart = parseInt(hourStart)
        
        let hourEnd = intHourStart + parseInt(Tong_Thoi_Gian_Hanh_Trinh)

        if(hourEnd<10){
            hourEnd = "0" + String(hourEnd)
        }else{
            hourEnd = String(hourEnd)
        }

        return {hourStart: hourStart,hourEnd: hourEnd}
    }

    let hour
    hour = convertTimeToString(detailsChuyenXe.Gio_Bat_Dau, detailsChuyenXe.Tong_Thoi_Gian_Hanh_Trinh)

    let imgChuyenXe = getImage[0].imgPath
    res.locals.imgChuyenXe 

    res.render('chuyen_xe',{Title})
    //res.send(typeof imgChuyenXe)
    
    
}

module.exports = controller;