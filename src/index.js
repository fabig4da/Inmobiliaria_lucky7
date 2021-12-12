const express = require('express');
const debug = require('debug')('app:main');
const cors = require('cors');
const fileupload = require('express-fileupload');
const path = require('path');


const { swaggerServe, swaggerSetup } = require('./settings/swagger');
const { connectDB } = require('./settings/db.connection');
const { Config } = require('./settings/env.config');
const routes = require('./routes/routes');

const app = express();

//db connection
connectDB(Config.mongoUri);



//midlewares
app.use(express.urlencoded({ extended: false }));
app.use(fileupload());
app.use(express.json());
app.use(cors());
app.use('/doc', swaggerServe, swaggerSetup);



//routes
app.use(routes);
//
app.use('/', express.static(path.join(__dirname, '../web')))


//start server
app.listen(Config.port, () => {
    debug(`Servidor listening on port ${Config.port}`)
})