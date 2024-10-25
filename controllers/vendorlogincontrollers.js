const Vendor = require('../models/vendorloginmodels');
const bcrypt = require('bcrypt');

exports.vendorLogin = async (req, res) => {
    const { email, password } = req.body;

    try {
        const vendor = await Vendor.findOne({ email });

        if (!vendor) {
            return res.status(400).json({ success: false, message: 'Vendor not found' });
        }

        const isMatch = await bcrypt.compare(password, vendor.password);

        if (!isMatch) {
            return res.status(400).json({ success: false, message: 'Incorrect password' });
        }

        return res.status(200).json({ success: true, message: 'Login successful' });
    } catch (error) {
        return res.status(500).json({ success: false, message: 'Server error' });
    }
};
