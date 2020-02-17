//imports
const express = require('express');
const AuthCtrl = require('../controllers/AuthController');
const Router = express.Router();
const path = require('path');

//ruta del login
Router.get('/login',(req,res,next)=>{
    res.render('hbs/login');
})

//ruta del consultor
Router.get('/consultor',(req,res)=>{
    res.render('hbs/consultor');
})

//ruta del login cuando mando los datos de logueo al servidor
Router.post('/login',AuthCtrl); //AuthCtrl atiende la ruta

//ruta de logout para cerrar sesion e ir nuevamente al login
Router.get('/logout',(req,res)=>{
    res.redirect('/login');                            //lo mando al login
})

//exporto el router con las rutas validas
module.exports = Router;