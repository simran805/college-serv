const mongoose = require('mongoose');

const LoginSchema = new mongoose.Schema( {
 email: {
    type:  String, match: /@gmail\.com$/,
 },
 mobile: {
    type: String, match: /^[0-9]{10}$/,
 },
 password: {
    type: String,
    required: true,
 }
});

module.exports = mongoose.model('Login', LoginSchema);