const express = require('express');
const router = express.Router();
const { login } = require('../controllers/indexControllers');

// Route for the home page
router.get('/', (req, res) => {
    res.send('Welcome to AgroFar API');
});

// Example route for login (you can expand this)
router.post('/login', login);

module.exports = router;
