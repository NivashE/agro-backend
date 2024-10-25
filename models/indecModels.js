const mongoose = require('mongoose');

// User schema
const UserSchema = new mongoose.Schema({
    email: String,
    password: String,
    role: { type: String, enum: ['farmer', 'vendor'] }
});

const User = mongoose.model('User', UserSchema);

module.exports = { User };
