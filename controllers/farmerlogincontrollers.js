const Farmer = require('../models/farmerloginmodels');
const bcrypt = require('bcrypt');

exports.farmerLogin = async (req, res) => {
    const { email, password } = req.body;

    try {
        const farmer = await Farmer.findOne({ email });

        if (!farmer) {
            return res.status(400).json({ success: false, message: 'Farmer not found' });
        }

        const isMatch = await bcrypt.compare(password, farmer.password);

        if (!isMatch) {
            return res.status(400).json({ success: false, message: 'Incorrect password' });
        }

        return res.status(200).json({ success: true, message: 'Login successful' });
    } catch (error) {
        return res.status(500).json({ success: false, message: 'Server error' });
    }
};
