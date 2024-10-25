// vendordashboardmodels.js
const mongoose = require('mongoose');

const SeedSchema = new mongoose.Schema({
  seedName: String,
  price: Number,
  photo: String,  // Store file path or URL
  description: String
});

module.exports = mongoose.model('Seed', SeedSchema);
