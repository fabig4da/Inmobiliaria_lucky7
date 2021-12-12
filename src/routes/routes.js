const express = require('express');
const userRoutes = require('./user.routes');
const propertyRoutes = require('./property.routes');
const authRoutes = require('./auth.user.routes');
// const fileupload = require('express-fileupload');
const fs = require('fs');
const path = require('path');

const routes = express();
// routes.use(fileupload());


routes.get('/image/:name', (req, res) => {
    const { name } = req.params;
    const dir = path.join(__dirname, '../uploads/images/' + name);
    if (!fs.existsSync(dir)) {
        return res.sendFile(path.join(__dirname, '../uploads/images/no-image.jpg'))
    }
    return res.sendFile(dir);

});


routes.use('/user', userRoutes);
routes.use('/property', propertyRoutes);
routes.use('/auth', authRoutes);



module.exports = routes;