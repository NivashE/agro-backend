const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const FarmerSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

// Hash the password before saving the farmer
FarmerSchema.pre('save', async function(next) {
    const farmer = this;
    if (!farmer.isModified('password')) return next();
    const salt = await bcrypt.genSalt(10);
    farmer.password = await bcrypt.hash(farmer.password, salt);
    next();
});

const Farmer = mongoose.model('Farmer', FarmerSchema);

module.exports = Farmer;
