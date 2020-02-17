//imports
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const CONFIG = require('../config/config');
const user =  require('./AuthController');

//funcion que renderiza el menu principal
function index(req,res){
    if(user.payload.role == 'admin'){           // verifico si el usuario logueado es admin
        var admin = user.payload.role;
    }
    res.render('hbs/index',{admin});            //envio admin sino(caso de ser dataentry) no se le envia nada y la pagina no renderiza el boton gestion de usuario
}

//exporto la funcion
module.exports = {index};