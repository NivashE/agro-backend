const express = require('express');
const router = express.Router();
const productDashboardController = require('../controllers/productdashboardcontrollers');

router.get('/:productId', productDashboardController.getProductDetails);
router.post('/buy/:productId', productDashboardController.buyProduct);

module.exports = router;
