const mongoose = require('mongoose');
//const uri = 'localhost:27017/vidzy';
const Products = require('../models/products');

exports.getProducts = (req, res) => {
    Products.find({}, (err, posts)=>{
			console.log(posts);
			res.json(posts);
			})
};

exports.createProducts = (req, res) => {
    var product = new Products({
        productName: req.body.productName,
        price: req.body.price
    })
    product.save(function (err, product) {
        if (err) { return next(err) }
        res.status(201).json(product)
    })
    
};   