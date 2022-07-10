const express = require('express');
const routes = express.Router();
const mainController = require('../controller/mainController');

routes.get('/', mainController.index);
routes.get('/news/:id', mainController.news);
routes.get('/contact', mainController.contacto);
routes.get('/all_News', mainController.allNews);




module.exports = routes;