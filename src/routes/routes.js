const express = require('express');
const userRoutes = require('./user.routes');
const propertyRoutes = require('./property.routes');
const authRoutes = require('./auth.user.routes');
const fileupload = require('express-fileupload');

const routes = express();


routes.get('/', (req, res) => {
    res.status(200).json({
        ok: true,
        msg: 'wellcome'
    })
});

routes.use(fileupload());

routes.use('/user', userRoutes);
routes.use('/property', propertyRoutes);
routes.use('/auth', authRoutes);



module.exports = routes;