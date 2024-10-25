const Product = require('../models/farmerdashboardmodels');

exports.getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving products' });
    }
};

exports.buyProduct = async (req, res) => {
    const { productId } = req.params;
    try {
        // Implement purchase logic here
        res.json({ message: 'Purchase successful!' });
    } catch (error) {
        res.status(500).json({ message: 'Purchase failed' });
    }
};
