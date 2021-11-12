const express = require('express');
const { swaggerServe, swaggerSetup } = require('./settings/swagger');

const { connectDB } = require('./settings/db.connection');
const { Config } = require('./settings/env.config');
const routes = require('./routes/routes');

const app = express();

//db connection
connectDB(Config.mongoUri);



//midlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/doc', swaggerServe, swaggerSetup);



//routes
app.use(routes);


//start server
app.listen(Config.port, () => {
    console.log('Server runing on port: ' + Config.port);
})