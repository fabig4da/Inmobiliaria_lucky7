const mongoose = require('mongoose');


/**
 * @swagger
 * components:
 *  schemas:
 *      User:
 *          type: object
 *          properties:
 *              name:
 *                  type: string
 *              lastname:
 *                  type: string
 *              email:
 *                  type: string
 *              password:
 *                  type: string
 *              validated:
 *                  type: boolean
 *              rol:
 *                  type: boolean
 *              activo:
 *                  type: boolean
 *          required:
 *              -name
 *              -lastname
 *              -email
 *              -password
 */
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