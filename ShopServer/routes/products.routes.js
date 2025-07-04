const express = require('express');
const router = express.Router();
const products = require('../controller/productosController');

router
    .get('/allProducts/:gender', products.getAllProducts)
    .get('/getFilters', products.getFilters)
    .post('/aplyFilters', products.aplyFilters)
    .get('/getitem/:id', products.getItem)

module.exports = router;