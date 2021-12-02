const express = require('express');
const { swaggerServe, swaggerSetup } = require('./src/settings/swagger');
const path = require('path');
const { connectDB } = require('./src/settings/db.connection');
const { Config } = require('./src/settings/env.config');
const routes = require('./src/routes/routes');
const ejs = require('ejs');

const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/src/views/index.html')
})

//db connection
connectDB(Config.mongoUri);

//midlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/doc', swaggerServe, swaggerSetup);
app.use(express.static(__dirname + '/src/views'));



//routes
app.use(routes);


//start server
app.listen(Config.port, () => {
    console.log('Server running on port: ' + Config.port);
});