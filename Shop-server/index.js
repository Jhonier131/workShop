const express = require('express');
const {urlencoded, json} = require('express');
const cors = require('cors');
const db = require('./database/mongo.js');
const app = express();
const routerShop = require('./routes/shop.routes');

db.dbInit().then(res => {
    console.log('Conexion realizada');
})

app.use(urlencoded({extended: true}))
app.use(json())

app.use(cors())
app.use('/shop', routerShop);

app.listen(4000, ()=>{
    console.log('listening at port 4000');
})