const express = require("express");
const routes = express.Router();
const controller = require("../controller/controller");

//rutas
routes.get("/", controller.index);

routes.get("/login", controller.login);
routes.get("/product_cart", controller.product_cart);
routes.get("/product_detail", controller.product_detail);
routes.get("/register", controller.register);
routes.get("/add_product", controller.add_product);
routes.get("/header", controller.header);
routes.get("/footer", controller.footer);

module.exports = routes;