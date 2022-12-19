const express = require('express');
const app = express();
const ehbs = require('express-handlebars');

app.engine('hbs', ehbs.engine({
    extname: 'hbs',
    defaultLayout: 'layout',
    layoutsDir: __dirname + '/views/layouts',
    partialsDir: __dirname +  '/view/partials'
}))
app.set('view engine', 'hbs')

app.use(express.static(__dirname + '/public'))

app.get('/createTables', (req, res) => {
    let models = require('./models');
    models.sequelize.sync().then(() => {
        res.send('tables created');
    })
})

app.get('/', (req,res) => {
    res.render('index', {
        style: '/css/trang_chu.css'
    })
})

app.get('/nhaxe', (req,res) => {
    res.render('nha_xe')
})

app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), () => {
    console.log(`server is listening on port ${app.get('port')}`);
})