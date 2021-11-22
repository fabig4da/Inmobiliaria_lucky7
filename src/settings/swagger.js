const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const openapiSpecification = swaggerJsdoc({
    definition: {
        openapi: '3.0.0',
        info: {
            version: '1.0',
            title: 'Inmobiliaria lucky7',
        },
        servers: [{ url: 'http://localhost:4000' }]
    },
    apis: ['./src/routes/*.js', './src/models/*.js'] // files containing annotations as above
});

const swaggerServe = swaggerUi.serve;
const swaggerSetup = swaggerUi.setup(openapiSpecification);

module.exports = { swaggerServe, swaggerSetup };