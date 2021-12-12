const Property = require('../models/property.model');
const { loadArchivo, deleteArchivo } = require('../settings/images');
const { Response } = require('../utils/response');


module.exports = {
    findAllProperty: async(req, res) => {
        try {
            const propertyFouds = await Property.find();
            Response.success(res, propertyFouds);
        } catch (error) {
            Response.error(res);
        }
    },
    findOneProperty: async(req, res) => {
        const { id } = req.params;
        try {
            const propertyFouds = await Property.findOne({ _id: id });
            Response.success(res, propertyFouds);
        } catch (error) {
            Response.error(res);
        }
    },
    createProperty: async(req, res) => {
        const { body } = req;
        console.log(body);
        const property = new Property(body);
        property.images = loadArchivo(req.files, '/src/uploads')
        try {
            await property.save();
            Response.success(res, property);
        } catch (error) {
            Response.error(error);
        }
    },
    updateProperty: async(req, res) => {

    },
    deleteProperty: async(req, res) => {
        const { id } = req.params;
        try {
            const propertydeleted = await Property.findByIdAndDelete(id);
            deleteArchivo(propertydeleted.images)
            Response.success(res, propertydeleted);
        } catch (error) {
            console.log(error);
            Response.error(res);
        }
    }
}