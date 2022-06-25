const express = require('express');
const routes = express.Router();
const path = require('path');

const { body } = require('express-validator');

const multer = require('multer');
const myStorage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './public/uploads/') // customizamos nuesta storage... 
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '_' + file.fieldname + path.extname(file.originalname))
    }
});

var maxSize = 1024;
const uploads = multer({
    storage: myStorage,
    limits: { fileSize: maxSize }
});

const controller = require('../controller/controller');

// GET - localhost:3000/products
routes.get('/', controller.browse);

// GET - localhost:3000/products/create => redirecciona una view en el controller
routes.get('/create', controller.create);
// POST - localhost:3000/products
routes.post('/', [
        body("pdtName").notEmpty().withMessage("El Nombre es obligatorio"),
        body("pdtPrice").notEmpty().withMessage("El Precio es obligatorio")
    ],
    uploads.single('productImage'), controller.add);

// GET - localhost:3000/products/edit/:id
routes.get('/edit/:id', controller.edit);
// PUT - localhost:3000/products/id
routes.put('/:id', controller.update);

// GET - localhost:3000/products/:id
routes.get('/:id', controller.read);

// DELETE - localhost:3000/products/:id
routes.delete('/:id', controller.delete);

module.exports = routes;