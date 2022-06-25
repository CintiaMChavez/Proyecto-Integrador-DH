const { Router } = require("express");
const mainController = require("../controller/mainController");
const routes = Router();


routes.get('/', mainController.home);

// routes.get('/edit/', mainController.edit);

module.exports = routes;