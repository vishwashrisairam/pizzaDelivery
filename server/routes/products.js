const express = require('express');

const { getProducts, createProducts, deleteProducts, getOneProduct, updateProducts } = require('../controllers/products');

const router = express.Router();

router.get('/products', getProducts);
router.get('/products/:id', getOneProduct);
router.post('/products', createProducts);
router.put('/products/:id', updateProducts);
router.delete('/products/:id', deleteProducts);

module.exports = router;