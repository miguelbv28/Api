const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerOptions = {
swaggerDefinition: {
    openapi: '3.0.0',
    info: {
    title: 'API',
    version: '1.0.0',
    description: 'Documentación de la API con Swagger',
    },
    servers: [
    {
        url: 'http://localhost:4000/api',
        description: 'Servidor Local',
    },
    ],
},
apis: ['./routes/*.js'],
};

const swaggerSpecs = swaggerJsDoc(swaggerOptions);

module.exports = { swaggerUi, swaggerSpecs };

