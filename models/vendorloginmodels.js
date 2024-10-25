const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const VendorSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

// Hash the password before saving the vendor
VendorSchema.pre('save', async function(next) {
    const vendor = this;
    if (!vendor.isModified('password')) return next();
    const salt = await bcrypt.genSalt(10);
    vendor.password = await bcrypt.hash(vendor.password, salt);
    next();
});

const Vendor = mongoose.model('Vendor', VendorSchema);

module.exports = Vendor;
