const path = require('path');
const fs = require('fs')

let json_c = fs.readFileSync(
    path.join(__dirname, "../models/data/news.json"), { encoding: "utf-8" }
);
let products_save = fs.readFileSync(
    path.join(__dirname, "../models/data/products.json"), { encoding: "utf-8" }
);

let news = JSON.parse(json_c);
let products = JSON.parse(products_save);

const mainController = {

    index: (req, res) => {

        let selecciones = products.slice(-4);
        res.render(path.join(__dirname, '../views/index.ejs'), { selecciones: selecciones, news: news })
    },

    news: (req, res) => {

        const detalleId = Number(req.params.id); //convierto el id string a un numero para poder hacer la triple comparacion

        let search = news.find((news) => {
            //filtro mis products y bco el id
            return news.id_novedades === detalleId;
        });

        res.render(path.join(__dirname, '../views/prueba.ejs'), { search })
    },

    contacto: (req, res) => {
        res.render(path.join(__dirname, '../views/contacto.ejs'))
    },

    allNews: (req, res) => {

        res.render(path.join(__dirname, '../views/allNews.ejs'), { news: news })
    }


};

module.exports = mainController;