const express = require('express');

const { getProducts, createProducts, deleteProducts } = require('../controllers/products');

const router = express.Router();

router.get('/products', getProducts);
router.post('/products', createProducts);
router.patch('/products/:id', deleteProducts);

module.exports = router;