const express = require('express');
const { swaggerServe, swaggerSetup } = require('./src/settings/swagger');
const { connectDB } = require('./src/settings/db.connection');
const { Config } = require('./src/settings/env.config');
const routes = require('./src/routes/routes');
const ejs = require('ejs');
const User = require('./src/models/user.model');
const Properties = require('./src/models/property.model');

const app = express();

app.set('views', './src/views/web');
app.set('view engine', 'ejs');

//index page
app.get('/', (req, res) => {
    res.render('index');
});

//users table page
app.get('/users', (req, res) => {
    User.find({}, function (err, user) {
        res.render('users', {
            usersList: user
        });
    });
});

//users register page
app.get('/user_signUp', (req, res) => {
    res.render('user_signUp');
});

//properties table page
app.get('/properties', (req, res) => {
    Properties.find({}, function (err, property) {
        res.render('properties', {
            propertiesList: property
        });
    });
});

//users register page
app.get('/property_register', (req, res) => {
    res.render('property_register');
});

//mission page
app.get('/mission', (req, res) => {
    res.render('mission');
});

//vision page
app.get('/vision', (req, res) => {
    res.render('vision');
});

//contact page
app.get('/contact', (req, res) => {
    res.render('contact');
});

//login page
app.get('/login', (req, res) => {
    res.render('login');
});


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