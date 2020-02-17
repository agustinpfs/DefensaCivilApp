//imports
const express = require('express');
const UserCtrl = require('../controllers/UserController');
const Router = express.Router();

//.<metodo http(ruta,controlador que lo atiende.metodo de dicho controlador que lo atiende,otro si es necesario donde se ejecutan en orden de izquierda a derecha)>
Router.get('/',UserCtrl.index) //localhost:port/user
      .post('/',UserCtrl.create)   //localhost:port/user
      .get('/:key/:value',UserCtrl.find,UserCtrl.show)  //localhost:port/user/_id/#iduser                                                SIN USO POR AHORA
      .post('/edit',UserCtrl.search,UserCtrl.update) //localhost:port/user/edit                                                          EDITAR
      .post('/delete/:key/:value',UserCtrl.find,UserCtrl.remove); //localhost:port/user/delete/username(literalmente)/username(valor)    BORRAR

//exporto mi router que contiene las rutas validas que acepta el server
module.exports = Router;