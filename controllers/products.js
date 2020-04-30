const mongoose = require('mongoose');
//const uri = 'localhost:27017/vidzy';
const Products = require('../models/products');

mongoose.set('useFindAndModify', false);

exports.getProducts = (req, res) => {
    Products.find({ isDeleted: false }, (err, prod) => {
        if (err) throw err;
		res.status(200).json(prod);
		})
};

exports.getOneProduct = (req, res) => {
    Products.find({ _id: req.params.id }, (err, prod) => {
        if (err) throw err;
        res.status(200).json(prod);
})
};

exports.createProducts = (req, res) => {
    var product = new Products({
        productName: req.body.productName,
        category: req.body.category,
        description: req.body.description,
        price: req.body.price,
        size: req.body.size,
        crust: req.body.crust,
        toppings: req.body.toppings,
	    isDeleted: false
    })
    product.save(function (err, product) {
        if (err) throw err;
        res.status(201).json(product)
    })
    
};   

exports.updateProducts = (req, res) => {
    console.log(req.body);
    Products.findByIdAndUpdate(req.params.id, req.body, (err, updated) => {
        if (err) throw err;
        res.status(200).json({
            message: "Product updated successfully"
        })
    })
};

exports.deleteProducts = (req, res) => {
    Products.findByIdAndUpdate(req.params.id, { isDeleted: true }, (err, updated) => {
        if (err) throw err;
        res.status(200).json({
            message: "Product deleted successfully"
        })
    })
};
