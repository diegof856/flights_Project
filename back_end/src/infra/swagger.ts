import swaggerJSDoc from 'swagger-jsdoc';

const options: swaggerJSDoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Flight API',
      version: '1.0.0',
      description: 'API para gerenciamento e cálculos de voos',
    
      contact: {
        name: 'Diego Felipe',
        url: 'https://github.com/diegof856', 
        email: 'diegofelipe1025@gmail.com',
      },
      license: {
        name: 'ISC',
        url: 'https://opensource.org/licenses/ISC',
      },
    },
    servers: [
      {
        url: `http://localhost:${process.env.PORT || 3333}`,
        description: 'Servidor Local',
      },
    ],
  },
  apis: ['./src/server/routes/*.ts', './src/controller/**/*.ts'], 
};
export const swaggerSpec = swaggerJSDoc(options);