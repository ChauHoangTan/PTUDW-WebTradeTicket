const controller = {};

controller.showList = (req, res) => {
    let Title = 'Danh sách chuyến xe';
    res.render('chuyen_xe', { Title });
}

controller.showDetails= (req, res) => {
    let Title = 'Chi tiết chuyến xe';
    res.render('chuyen_xe', { Title });
}

module.exports = controller;