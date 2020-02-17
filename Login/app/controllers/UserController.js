//imports
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const CONFIG = require('../config/config');
const user =  require('./AuthController');

//muestro todos los usuarios existentes
function index(req,res){
    User.find({})       //me traigo todos los user de la bd, los cuales se almacenan en users(array)
        .then(users => {
            if(users.length){ //si hay alguno mandalo
                return res.status(200).render('hbs/users',{users});
            }                   
            return res.status(204).send({message: 'NO CONTENT'});       //no hay users en bd
        }).catch(error => res.status(500).send({error}));               //error en la busqueda/server
}

//muestro un usuario en particular
//SIN USO POR AHORA
function show(req,res){
    if(req.body.error) return res.status(500).send({error});                        //error de servidor
    if(!req.body.users) return res.status(404).send({message: 'NOT FOUND'});        //no hay users
    let users = req.body.users;
    return res.status(200).send({users});
}

//creo usuario
function create(req,res){
    console.log(user.payload.role)       // sale del import y payload son los datos del usuario que esta logueado ahora
    if(user.payload.role == 'admin'){    //verifico que el usuario logueado sea el admin
        new User(req.body).save()        //genero un objeto User con los campos pasados por la vista y lo guardo en BD
        .then(user => res.status(201).redirect('/user'))    //redirecciono a /user donde estan todos los usuarios
        .catch(error => res.status(500).send({error}));     //error de servidor
        }
        else (res.status(403).send({message:'NO ADMIN'}));  //sin permisos de admin
    }

//actualizo datos de un usuario
function update(req,res){
    if(user.payload.role == 'admin'){               //verifico que el usuario sea el admin
        //el req.body.users viene del metodo search() que se ejecuta previamente a este
        var previous_user = req.body.users[0];      //creo variable con los datos actuales del usuario(todavia sin modificar)
        
        //verifico que campos pasados por la vista me indican datos nuevos y los cambio(solo aquellos que sean validos, si no recibo nada nuevo dejo los valores viejos)

        //name
        if(req.body.name != '' )                    //si la vista me paso algo lo cambio
            previous_user.name = req.body.name
        //username
        if(req.body.username != '')
            previous_user.username = req.body.username
        //email
        if(req.body.email != '')
            previous_user.email = req.body.email
        //password
        if(req.body.password != '')
            previous_user.password = req.body.password
        //role
        if(req.body.role != '')
            previous_user.role = req.body.role
    
        previous_user.save()                                    //grabo en BD el nuevo usuario
        .then(user => res.status(200).redirect('/user'))        //redirecciono a la vista /user donde estan todos los usuarios
        .catch(error => res.status(500).send({error}));         //error de servidor
        }
        else (res.status(403).send({message:'NO ADMIN'}));      //sin permisos de admin
}

//elimino un usuario
function remove(req,res){
    if(user.payload.role == 'admin'){                       //verifico que el usuario sea el admin
        req.body.users[0].remove()                          //elimino el usuario(que proviene del metodo find() que se ejecuto previamente)
        .then(user => res.status(200).redirect('/user'))    //redirecciono a la vista /user donde estan todos los usuarios
        .catch(error => res.status(500).send({error}));     //error de servidor
    }
    else (res.status(403).send({message:'NO ADMIN'}));      //sin permisos de admin
}

//necesito el parametro next para indicar el paso de un metodo al otro
function find(req,res,next){
    let query = {};
    query[req.params.key] = req.params.value;       //en query guardo los parametros de busqueda(en este caos serian username)
    User.find(query).then(users => {                //busco usuarios que coincidan con el username pasado en query
        if(!users.length) return next();            //si no hay usuarios pasa a la siguiente funcion
        req.body.users = users;         //usuarios encontrados 
        return next();                  //paso a la siguiente funcion
    }).catch(error =>{                  //posibles errores
        req.body.error = error;
        next();
    })
}

//busqueda especial para cuando edito usuario
function search(req,res,next){
    let query = {};
    query["username"] = req.body.previous_username;             //busco a partir del username actual del usuario(previous_username)
    User.find(query).then(users =>{
        if(!users.length) return next();
        req.body.users = users;
        return next();
    }).catch(error =>{
        req.body.error = error;
        next();
    })
}

//exporto las funciones 
module.exports = {index,show,create,update,remove,find,search}

/*
function create(req,res){
    console.log(req.body.nombre)    //campo nombre del modal
    console.log(req.headers)
    if(req.headers.authorization){
        let token = req.headers.authorization.split(' ')[1];
        jwt.verify(token,CONFIG.SECRET_TOKEN,function(error,decoded){
            if(error) return res.status(403).send({message: 'Error sin permiso',error});
            if(decoded.role == 'admin') 
            {
                console.log(new User(req.body))
                //new User(req.body).save()
                .then(user => res.status(201).send({user}))
                .catch(error => res.status(500).send({error}));
            }
            else (res.status(403).send({message:'NO ADMIN'}));
            
        });
    }
    else res.status(403).send({message: 'Error:sin headers'});
}
*/

/*
//actualizo datos de un usuario
function update(req,res){
    if(req.headers.authorization){
        let token = req.headers.authorization.split(' ')[1];
        jwt.verify(token,CONFIG.SECRET_TOKEN,function(error,decoded){
            if(error) return res.status(403).send({message: 'QUÉ HACES ACA WACHIN??',error});
            if(decoded.role == 'admin') 
            {
                if(req.body.error) return res.status(500).send({error});
                if(!req.body.users) return res.status(404).send({message: 'NOT FOUND'});
                let user = req.body.users[0];
                user = Object.assign(user,req.body);        //asigno el nuevo usuario a user
                user.save().then(user => res.status(200).send({message: "UPDATED", user})).catch(error => res.status(500).send({error}));
            }
            else (res.status(403).send({message:'NO ADMIN'}));
            
        });
    }
    else res.status(403).send({message: 'QUÉ HACES ACA WACHIN??'});
}*/

/*
//elimino un usuario
function remove(req,res){
    if(req.headers.authorization){
        let token = req.headers.authorization.split(' ')[1];
        jwt.verify(token,CONFIG.SECRET_TOKEN,function(error,decoded){
            if(error) return res.status(403).send({message: 'QUÉ HACES ACA WACHIN??',error});
            if(decoded.role == 'admin') 
            {
                if(req.body.error) return res.status(500).send({error});
                if(!req.body.users) return res.status(404).send({message: 'NOT FOUND'});
                req.body.users[0].remove().then(user => res.status(200).send({message: 'REMOVED', user})).catch(error => res.status(500).send({error}));
            }
            else (res.status(403).send({message:'NO ADMIN'}));
            
        });
    }
    else res.status(403).send({message: 'QUÉ HACES ACA WACHIN??'});
}
*/