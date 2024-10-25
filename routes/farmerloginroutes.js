const express = require('express');
const router = express.Router();
const { farmerLogin } = require('../controllers/farmerlogincontrollers.js');

// POST route for farmer login
router.post('/', farmerLogin);

module.exports = router;
