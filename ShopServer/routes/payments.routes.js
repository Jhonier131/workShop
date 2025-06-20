const express = require('express');
const router = express.Router();
const products = require('../controller/paymentsController');

router
    .get('/', products.getForm)
    .post('/pay', products.pay)
    .post('/respuesta', products.resp)
    .post('/confirmacion', products.confirmation);

module.exports = router;