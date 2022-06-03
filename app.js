const express = require("express");
const app = express();
const routes = require("./src/routes/index.routes")
const port = process.env.PORT || 3030;

app.use(express.static("public"));
//Routes
app.use("/", routes);
// llamando_servidor
app.listen(port, (req, res) => {
    console.log(`corriendo en el puerto ${port} 💻`)
});