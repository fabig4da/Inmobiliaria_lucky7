const mongoose = require('mongoose');


const propertySchema = new mongoose.Schema({
    name: {
        type: String
    },
    images: {
        type: String
    },
    description: {
        type: String
    },
    bedrooms: {
        type: Number
    },
    bathrooms: {
        type: Number
    },
    city: {
        type: String
    },
    address: {
        type: String
    },
    zone: {
        type: String
    },
    neighborhood: {
        type: String
    },
    available: {
        type: Boolean
    }
});


module.exports = mongoose.model('property', propertySchema);