const express = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();
const mongoose = require('mongoose');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(pino);

const uri = "mongodb+srv://umamahesh9:Hello@123456@cluster0-xvce2.mongodb.net/pizzaDelivery?retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected...'))
    .catch((err) => console.log(err))

const productRoutes = require("./routes/products");

app.use("/api", productRoutes);

/*
const Products = require('./models/products');
const prod1 = new Products({productName: 'Mo', category: 'pizza'});
prod1.save(function (err, prod) {
      if (err) return console.error(err);
      console.log(prod.productName + " saved to the collection.");
    });
*/

app.listen(3001, () =>
    console.log('Express server is running on localhost:3001')
);
