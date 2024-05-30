const express =  require('express');
const mongoose = require('mongoose');
const cors = require("cors");

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');

const Hotel = require('./models/hotel.model.js');
const hotelRoute= require('./routes/hotel.routes.js');
const userRouter = require('./routes/user.routes.js');
const imagesRoutes = require('./routes/imagesRoutes.js');


const app = express();
app.use(bodyParser.json());
app.use(cors());

//api card
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

// middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}))

//routes 
app.use("/api/hotels", hotelRoute);




mongoose.connect('mongodb+srv://DIOUF096:lqcdu5565o59YxG@backenddb.fk4wlii.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB')
  .then(() => {
    console.log("Database Connected!");

    app.listen(8000, () =>{
        console.log('server in running on port 8000');
    })
})
  .catch(() =>{
    console.log("connection failed !");
});