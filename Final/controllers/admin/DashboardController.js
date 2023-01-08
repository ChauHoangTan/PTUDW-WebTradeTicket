const controller = {};
const Title = 'Dashboard';

controller.showDashboard = async (req, res) => {
    res.render('admin/Dashboard', { Title })
}

module.exports = controller;
