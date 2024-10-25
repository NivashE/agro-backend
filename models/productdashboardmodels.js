const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    quantity: Number,
    description: String,
    // add other fields as necessary
});

// Export the model if it hasn't been defined yet
const Product = mongoose.models.Product || mongoose.model('Product', productSchema);
module.exports = Product;

