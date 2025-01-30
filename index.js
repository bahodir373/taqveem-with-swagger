const express = require('express');
const { connectDB } = require('./db/db.config')
const { taqveemRouter } = require('./routers/taqveem.router')
require('dotenv').config();
const cors = require('cors')

const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');


const app = express();
app.use(express.json())
app.use(cors())
connectDB()

const PORT = process.env.PORT || 4001
const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Taqveem API',
      version: '1.0.0',
      description: 'Ramazon taqvimi malumotlarini boshqarish API',
    },
    servers: [
      { url: `http://localhost:${PORT}`, description: 'Local server' },
    ],
  },
  apis: ['./routers/*.js'],
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get('/', (req,res) => {
	res.status(200).send(`<h1>Server is running</h1>`)
})

app.use('/',taqveemRouter)

app.listen(PORT, () => {
	console.log(`> Server is running on ${PORT}`)
})