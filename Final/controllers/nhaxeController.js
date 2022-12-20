const controller = {};

controller.showList = (req, res) => {
    let Title = 'Danh sách nhà xe';
    res.render('nha_xe', { Title });
}

controller.showDetails= (req, res) => {
    let Title = 'Chi tiết nhà xe';
    res.render('nha_xe', { Title });
}

module.exports = controller;