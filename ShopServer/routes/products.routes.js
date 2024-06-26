const express = require('express');
const router = express.Router();
const products = require('../controller/productosController');

router
    .get('/allProducts', products.getAllProducts)

module.exports = router;