const { Router } = require("express");
const controller = require("../controller/controller");
const routes = Router();


//rutas
routes.get('/', controller.index);
routes.get('/add_product', controller.add_product);
routes.get('/login', controller.login);
routes.get('/product_cart', controller.product_cart);
routes.get('/product_Detail', controller.product_Detail);
routes.get('/register', controller.register);

module.exports = routes;



// app.get("/", (req, res) => {
//     res.render("index", { titulo: "inicio EJS" });
// });

// routes.get("/", controller.index);

// routes.get("/login", controller.login);
// routes.get("/product_cart", controller.product_cart);
// routes.get("/product_Detail", controller.product_Detail);
// routes.get("/register", controller.register);
// routes.get("/add_product", controller.add_product);
// routes.get("/header", controller.header);
// routes.get("/footer", controller.footer);