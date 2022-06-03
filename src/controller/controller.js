const path = require("path");

const controller = {
    index: (req, res) => {
        res.sendFile(path.join(__dirname, "../views/index.html"))
    },
    login: (req, res) => {
        res.sendFile(path.join(__dirname, "../views/login.html"))
    },
    product_cart: (req, res) => {
        res.sendFile(path.join(__dirname, "../views/product_cart.html"))
    },
    product_Detail: (req, res) => {
        res.sendFile(path.join(__dirname, "../views/product_Detail.html"))
    },
    register: (req, res) => {
        res.sendFile(path.join(__dirname, "../views/register.html"))
    },
}

module.exports = controller;