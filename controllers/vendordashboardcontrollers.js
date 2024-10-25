// vendordashboardcontrollers.js
const Seed = require('../models/vendordashboardmodels');

exports.addSeed = async (req, res) => {
  try {
    const { seedName, price, description } = req.body;
    const photo = req.file ? req.file.path : null; // Assuming photo upload middleware is in place

    const newSeed = new Seed({ seedName, price, photo, description });
    await newSeed.save();

    res.status(201).json({ message: 'Seed added successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to add seed' });
  }
};
