const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const indexRoutes = require('./routes/indexRoutes');
const farmerLoginRoutes = require('./routes/farmerloginroutes');
require('dotenv').config(); // Load environment variables
const vendorLoginRoutes = require('./routes/vendorloginroutes');
require('dotenv').config(); // Load environment variables
const registerLoginRoutes = require('./routes/registerloginroutes');
require('dotenv').config(); // Load environment variables
const vendorDashboardRoutes = require('./routes/vendordashboardroutes');
const farmerDashboardRoutes = require('./routes/farmerdashboardroutes');
const productDashboardRoutes = require('./routes/productdashboardroutes');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb+srv://0318praveen:1234@cluster0.dswza.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', { useNewUrlParser: true, useUnifiedTopology: true })

    .then(() => console.log('MongoDB Connected'))
    .catch((err) => console.log(err));

const port = 8080;

// Use routes
app.use('/', indexRoutes);



// Farmer login routes
app.use('/farmerlogin', farmerLoginRoutes);
// Vendor login routes
app.use('/vendorlogin', vendorLoginRoutes);


// Registration and login routes
app.use('/register', registerLoginRoutes);


// Registration and login routes
app.use('/register', registerLoginRoutes);


//vendordashboard
app.use('/vendordashboard', vendorDashboardRoutes);


//farmerdashboard
app.use('/farmerdashboard', farmerDashboardRoutes);


//prodeuctdashboard
app.use('/productdashboard', productDashboardRoutes);

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});