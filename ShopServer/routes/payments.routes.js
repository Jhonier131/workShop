const express = require('express');
const router = express.Router();
const products = require('../controller/paymentsController');

router
    .get('/', products.getForm)
    .post('/pay', products.pay)
    .post('/responseurl', products.responseurl)
    .post('/confirmation', products.confirmation);

module.exports = router;