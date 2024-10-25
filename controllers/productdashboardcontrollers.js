const Product = require('../models/productdashboardmodels');

exports.getProductDetails = async (req, res) => {
    const { productId } = req.params;
    try {
        const product = await Product.findById(productId);
        res.json(product);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving product details' });
    }
};

exports.buyProduct = async (req, res) => {
    const { productId } = req.params;
    const { address } = req.body;
    try {
        // Here we save the purchase data (e.g., product ID and address)
        // Save order details to the database as needed.
        res.json({ message: 'Purchase successful! Cash on Delivery' });
    } catch (error) {
        res.status(500).json({ message: 'Purchase failed' });
    }
};
