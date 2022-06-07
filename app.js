const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "public")));

// llamando_servidor
app.listen(3030, () => {
        console.log("Servidor corriendo!(PUERTO 3030)");
    })
    // Rutas
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./views/index.html"));
})
app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, "./views/login.html"));

})
app.get("/product_Cart", (req, res) => {
    res.sendFile(path.join(__dirname, "./views/product_Cart.html"));

})
app.get("/product_Detail", (req, res) => {
    res.sendFile(path.join(__dirname, "./views/product_Detail.html"));

})
app.get("/register", (req, res) => {
    res.sendFile(path.join(__dirname, "./views/register.html"));

})