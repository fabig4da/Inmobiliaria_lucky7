const Property = require('../models/property.model');
const { Response } = require('../utils/response');


module.exports = {
    findAllProperty: async(req, res) => {
        try {
            const propertyFound = await Property.find();
            Response.success(res, propertyFound);
        } catch (error) {
            Response.error(res);
        }
    },
    findOneProperty: async(req, res) => {
        const { id } = req.params;
        try {
            const propertyFound = await Property.findOne({ _id: id });
            Response.success(res, propertyFound);
        } catch (error) {
            Response.error(res);
        }
    },
    createProperty: async(req, res) => {
        const { body } = req;
        const property = new Property(body);
        try {
            await property.save();
            Response.success(res, property);
        } catch (error) {
            Response.error(error);
        }
    },
    updateProperty: async(req, res) => {
        const { id } = req.params;
        const { body } = req;
        try {
            const propertyUpdate = await Property.findByIdAndUpdate(id, body);
            Response.success(res, `id del inmueble actualizado: ${propertyUpdate._id}`);
        } catch (error) {
            console.log(error);
            Response.error(res);
        }
    },
    deleteProperty: async(req, res) => {
        const { id } = req.params;
        try {
            const propertyDeleted = await Property.findByIdAndDelete(id);
            Response.success(res, propertyDeleted);
        } catch (error) {
            console.log(error);
            Response.error(res);
        }
    }
}