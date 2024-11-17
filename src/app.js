const express = require('express');
const http = require('http');
const app = express();
const httpServer = http.createServer(app);
const databaseConfig =require('./configs/db.config')
const expressConfig = require('./configs/express.config')
const serverConfig = require('./configs/server.config')
const routesConfig = require('./configs/routing.config')
const errorHandling = require('./utils/api_error_response');
const asyncHandler = require('express-async-handler');
const AppError = require('./utils/api_error_response');
//Database configuration
databaseConfig()


//express configuration
expressConfig(app)


//server configuration
serverConfig(httpServer)


//routes configuration 
routesConfig(app);


//error Handling 

app.use(errorHandling)


app.all('*', asyncHandler(async (req, res, next) => {
    next(new AppError('Not found',404))
}))