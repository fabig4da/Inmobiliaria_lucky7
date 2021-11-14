const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    name: {
        type: String, //type of data
        required: true // name is required
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    validated: {
        type: Boolean,
        required: true,
        default: false
    },
    rol: {
        type: String,
        required: true,
        enum: ['user', 'admin'],
        default: 'user'
    },
    activo: {
        type: Boolean,
        required: true,
        default: true
    }
})


module.exports = mongoose.model('user', userSchema);