const express = require('express');
const router = express.Router();
const shopController = require('../controller/shopController');


router
    .get('/clothes', shopController.getClothes)

module.exports = router;