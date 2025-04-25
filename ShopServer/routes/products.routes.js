const express = require('express');
const router = express.Router();
const products = require('../controller/productosController');

router
    .get('/allProducts', products.getAllProducts)
    .get('/allProductsMen', products.getAllProductsMen)
    .get('/getFilters', products.getFilters)
    .post('/aplyFilters', products.aplyFilters)

module.exports = router;