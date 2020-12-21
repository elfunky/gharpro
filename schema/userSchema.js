const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    fullName: { type: String },
    email: { type: String, unique: true },
    Profile: { type: String },
    contact_1: { type: String, unique: true },
    contact_2: { type: String, unique: true },
});

module.exports = mongoose.model('users', UserSchema)