const express = require('express');
const userRoutes = require('./user.routes');
const propertyRoutes = require('./property.routes');

const routes = express();


routes.get('/', (req, res) => {
    res.status(200).json({
        ok: true,
        msg: 'wellcome'
    })
});

routes.use('/user', userRoutes);
routes.use('/property', propertyRoutes);



module.exports = routes;