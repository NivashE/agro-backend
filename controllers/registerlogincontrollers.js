const User = require('../models/registerloginmodels');
const bcrypt = require('bcrypt');

exports.registerLogin = async (req, res) => {
    const { name, email, password, role } = req.body;

    try {
        let user = await User.findOne({ email });

        if (!user) {
            // Register new user
            user = new User({ name, email, password, role });
            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(password, salt);
            await user.save();
            return res.status(200).json({ success: true, message: 'Registration successful', role });
        }

        // Login existing user
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ success: false, message: 'Incorrect password' });
        }

        return res.status(200).json({ success: true, message: 'Login successful', role: user.role });
    } catch (error) {
        return res.status(500).json({ success: false, message: 'Server error' });
    }
};
