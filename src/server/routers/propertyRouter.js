var express = require('express');
var propertyRouter = express.Router();
var propertyController = require('../controllers/propertyController.js');

propertyRouter.get('/all', propertyController.getAllProperties);
propertyRouter.get('/:id', propertyController.getProperty);
propertyRouter.post('/', propertyController.addProperty);


module.exports = propertyRouter;