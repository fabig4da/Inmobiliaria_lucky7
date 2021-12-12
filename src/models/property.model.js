const mongoose = require('mongoose');


/**
 * @swagger
 * components:
 *  schemas:
 *      Property:
 *          type: object
 *          properties:
 *              name:
 *                  type: string
 *              description:
 *                  type: string
 *              bedroom:
 *                  type: number
 *              bathroom:
 *                  type: number
 *              city:
 *                  type: string
 *              address:
 *                  type: string
 *              zone:
 *                  type: string
 *              neighborhood:
 *                  type: string
 *              images:
 *                  type: string
 *              available:
 *                  type: boolean
 *          required:
 *              -name
 *              -description
 *              -bedroom
 *              -bathroom
 *              -ciudad
 *              -address
 *              -zone
 *              -available
 */

const propertySchema = new mongoose.Schema({
    name: {
        type: String
    },
    description: {
        type: String
    },
    bedroom: {
        type: Number
    },
    bathroom: {
        type: Number
    },
    city: {
        type: String
    },
    address: {
        type: String
    },
    neighborhood: {
        type: String
    },
    images: {
        type: String
    },
    zone: {
        type: String
    },
    available: {
        type: Boolean
    }
});


module.exports = mongoose.model('property', propertySchema);