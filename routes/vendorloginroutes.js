const express = require('express');
const router = express.Router();
const { vendorLogin } = require('../controllers/vendorlogincontrollers');

// POST route for vendor login
router.post('/', vendorLogin);

module.exports = router;
