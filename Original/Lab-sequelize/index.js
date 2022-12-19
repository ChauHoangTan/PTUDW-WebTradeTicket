const express = require('express');
const app = express();

app.get('/createTables',(req,res) => {
    let models = require('./models');
    models.sequelize.sync().then(() => {
        res.send('table created')
    });
})

app.set('port',process.env.PORT || 5000);
app.listen(app.get('port'), () => {
    console.log(`server is listening on pot ${app.get('port')}`);
})