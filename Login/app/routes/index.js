//imports
const express = require('express');
const UserCtrl = require('../controllers/UserController');
const indexCtrl = require('../controllers/indexController');
const Router = express.Router();

// ruta de la pagina principal
Router.get('/',indexCtrl.index);                    //el metodo index de indexctrl es el que atiende la peticion

//exporto el router
module.exports = Router;