const path = require("path");

module.exports = {
    index: (req, res) => {
        res.render('index')

    },
    add_product: (req, res) => {
        res.render('add_product')

    },
    login: (req, res) => {
        res.render('login')

    },
    product_cart: (req, res) => {
        res.render('product_cart')

    },
    product_Detail: (req, res) => {
        res.render('product_Detail')

    },
    register: (req, res) => {
        res.render('register')

    },
}