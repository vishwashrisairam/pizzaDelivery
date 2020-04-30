const express = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();
const mongoose = require('mongoose');
const session = require('express-session');

const app = express();
//modified to enable request parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(pino);


const uri = "mongodb+srv://umamahesh9:Hello@123456@cluster0-xvce2.mongodb.net/pizzaDelivery?retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected...'))
    .catch((err) => console.log(err))

// session 
app.use(session({
    secret: 'coffee',
    resave: true,
    saveUninitialized: false
}));


const productRoutes = require("./routes/products");
const userRoutes = require("./routes/users");



app.get("/", (req,res)=> res.send("Backend healthcheck successful"))
app.use("/api/users",userRoutes);
app.use("/api/products", productRoutes);



app.listen(3001, () =>
    console.log('Express server is running on localhost:3001')
);
