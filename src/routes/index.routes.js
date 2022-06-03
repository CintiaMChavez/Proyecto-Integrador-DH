const express = require("express");
const routes = express.Router();
const controller = require("../controller/controller");

//rutas
routes.get("/", controller.index);

routes.get("/login", controller.login);
routes.get("/product_cart", controller.product_cart);
routes.get("/product_Detail", controller.product_Detail);
routes.get("/register", controller.register);

module.exports = routes;