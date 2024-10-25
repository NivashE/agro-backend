const express = require('express');
const router = express.Router();
const { registerLogin } = require('../controllers/registerlogincontrollers');

// POST route for registration and login
router.post('/', registerLogin);

module.exports = router;
