// vendordashboardroutes.js
const express = require('express');
const router = express.Router();
const vendordashboardController = require('../controllers/vendordashboardcontrollers');

router.post('/add-seed', vendordashboardController.addSeed);

module.exports = router;
