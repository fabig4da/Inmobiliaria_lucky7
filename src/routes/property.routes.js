const { Router } = require('express');
const propertyController = require('../controllers/property.controller');

const propertyRoutes = Router();

propertyRoutes.get('/', propertyController.findAllProperty);
propertyRoutes.get('/:id', propertyController.findOneProperty);
propertyRoutes.post('/', propertyController.createProperty);
propertyRoutes.put('/:id', propertyController.updateProperty);
propertyRoutes.delete('/:id', propertyController.deleteProperty);


module.exports = propertyRoutes;