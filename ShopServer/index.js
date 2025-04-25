const express = require('express');
const {urlencoded, json} = require('express');
const cors = require('cors');
const db = require('./database/mongo.js');
const app = express();
const products = require('./routes/products.routes.js');

db.dbInit().then(() => console.log('Conexion realizada'))

app.use(urlencoded({extended: true}))
app.use(json())
app.use(cors())

app.use('/r1', products);

app.listen(4000, ()=>{
    console.log('listening at port 4000');
})


const PORT = 4000;
const HOST = '192.168.1.115';

// app.listen(PORT, HOST, () => {
//     console.log(`Servidor corriendo en http://${HOST}:${PORT}`);
// });

module.exports = app;