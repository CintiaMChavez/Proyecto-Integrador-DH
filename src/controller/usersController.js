const path = require('path');
const fs = require('fs');

let user_data = fs.readFileSync(path.join(__dirname, '../models/data/users.json'), { encoding: 'utf-8' });
let users = JSON.parse(user_data);

const usersController = {

    login: (req, res) => {
        res.render(path.join(__dirname, '../views/users/login.ejs'))
    },

    admin: (req, res) => {
        res.render(path.join(__dirname, '../views/admin.ejs'))
    },

    register: (req, res) => {

        //genero una id segun tamaño de array
        let generadorId;
        users.length === 0 ? generadorId = users.length : generadorId = (users.at(-1).id) + 1

        //Asigno datos del body al objeto a insertar a la base de datos    
        let formDataUser = {
            id: generadorId,
            nombre: req.body.nombre,
            email: req.body.email,
            fechaNac: req.body.fechaNacimiento,
            password: req.body.password,
            profileImg: req.file.filename,
        }

        console.log(formDataUser);

        //Isercion de objeto a la base de datos
        users.push(formDataUser);
        let newDataUsers = JSON.stringify(users);
        fs.writeFileSync(path.join(__dirname, '../models/data/users.json'), newDataUsers);

        //Redireccion al login luego del registro
        res.redirect('/users/login')
    },


}

module.exports = usersController;