const express = require('express');
const router = express.Router();
const farmerDashboardController = require('../controllers/farmerdashboardcontrollers');

router.get('/products', farmerDashboardController.getProducts);
router.post('/buy/:productId', farmerDashboardController.buyProduct);

module.exports = router;
