const express = require('express');

const { getProducts, createProducts } = require('../controllers/products');

const router = express.Router();

router.get('/products', getProducts);
router.post('/products', createProducts);

module.exports = router;