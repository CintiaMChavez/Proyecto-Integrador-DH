const path = require('path');
const express = require("express");
const routes = require("./routes/routes");
const productsRoutes = require('./routes/productsRoutes');
const mdProducts = require("./middlewares/mdProducts");
const app = express();
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))
const port = process.env.PORT || 3000;




app.listen(port, (req, res) => {
    console.log(`corriendo en el puerto ${port} 💻`)
});

app.use(express.static(path.join(__dirname, '../public')));

// Setup del req.body
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Middleware
app.use(mdProducts);


// ruta home
app.use(routes);
app.use('/products', productsRoutes);