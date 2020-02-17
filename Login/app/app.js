//imports
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const expressHandlebars = require('express-handlebars');

//aplicacion
const App = express();

//variables globales
const User = require('./routes/user');
const Auth = require('./routes/auth');
const Index = require('./routes/index');

//const AuthToken = require('./middlewares/AuthToken');     DESCOMENTAME CUANDO ME TERMINES       es el modulo de las rutas por permiso 

//proteccion de rutas
//App.use(AuthToken);                                       DESCOMENTAME CUANDO ME TERMINES

//permitir json como medio de comunicacion
App.use(bodyParser.json());
App.use(bodyParser.urlencoded({extended: false}));  //bloquea formulario directo(lo manda en json)

//motor de vistas
App.set('views',path.join(__dirname, 'views'));       //decirle a node que busque las rutas en views
App.engine('.hbs',expressHandlebars({
    // main se va a cargar siempre primero cuando cargue una vista , luego se cargara la que corresponde
    defaultLayout:  'main',           //si quiero poner una vista por default que se repita en todas las rutas
    layoutsDir: path.join(App.get('views'), 'layouts'),      //indicarle que la layouts esta dentro de views
    extname:    '.hbs'     //nombre extension
}));
App.set('view engine','.hbs');

//public
App.use(express.static(path.join(__dirname,'public')));     //agrego public a la dirname para no escribirla luego(simplemente se pone / en su lugar)

//rutas validas que atiende la app
App.use('/user',User);
App.use(Auth);
App.use('/index',Index);

//exporto la App
module.exports = App;