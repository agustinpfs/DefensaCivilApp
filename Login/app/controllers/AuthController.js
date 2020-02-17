//imports
const User = require('../models/User');
const bcrypt = require('bcrypt');
const CONFIG = require('../config/config');
const jwt = require('jsonwebtoken');

//Username
//Password

function login(req,res){
    let username = req.body.username;       //username pasado por la vista
    let password = req.body.password;       //password pasado por la vista
    User.findOne({username})                //busco en BD si hay un schema User que tenga ese username,retorna el resultado en una coleccion user
        .then(user => {
            if(!user) return res.status(404).render('hbs/login');       //no hay usuario, vas al login de nuevo
            
            bcrypt.compare(password,user.password)                      //si hay usuario, verifico que la password sea valida
                  .then(match => {
                        if(match){      //password valida
                            payload = {                                 //payload representa los datos del usuario logueado
                                username: user.username,
                                email: user.email,
                                name: user.name,
                                role: user.role
                            }
                            if(payload.role == 'admin')
                                var admin = payload.role
                            //Acceso
                            jwt.sign(payload,CONFIG.SECRET_TOKEN,function(error,token){
                                if(error){
                                    res.status(500).send({error});          //posible error en el servidor 
                                }else{
                                    console.log('logged:'+payload.username);
                                    module.exports.payload = payload;       //exporto los datos de usuario logueado
                                    //res.render('hbs/index',{token,admin});        //acceso al menu principal
                                    res.redirect('/index');                         //redirecciono al menu principal(get('/index'))
                                }
                            })
                        }else{      //contraseña invalida
                            //No doy Acceso
                            res.status(200).render('hbs/login');        //contraseña incorrecta, de vuelta al login
                        }

                //posibles errores en el servidor        
                  }).catch(error => {
                    console.log(error);
                    res.status(500).send({error});
                  });
        }).catch(error => {
            console.log(error);
            res.status(500).send({error});
        });
}

//exporto la funcion login
module.exports= login;
