const express = require('express');
const { swaggerServe, swaggerSetup } = require('./src/settings/swagger');

const { connectDB } = require('./src/settings/db.connection');
const { Config } = require('./src/settings/env.config');
const routes = require('./src/routes/routes');

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
    console.log('Server running on port: ' + Config.port);
});