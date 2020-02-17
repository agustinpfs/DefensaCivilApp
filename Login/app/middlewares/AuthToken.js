//imports
const jwt = require('jsonwebtoken');
const CONFIG = require('../config/config');

//exporto funcion que regula el acceso a rutas dependiendo el rol de usuario
//NO USAR , TODAVIA NO ANDA
module.exports = function(req,res,next){
    if(req.path != 'auth/login'){       
        if(req.headers.authorization){      //si tiene permiso
            //split genera un array tomando como separador el parametro(espacio), de ese array me quedo con el segundo elemento que es el token
            let token = req.headers.authorization.split(' ')[1]; 
            jwt.verify(token,CONFIG.SECRET_TOKEN,function(error,decoded){
                if(error) 
                    return res.status(403).send({message:'no tienes permisos suficientes'});
                if(req.method !='GET'){ //aca verifico que sea metodo pero tambien puedo comproboar por ruta (req.path == /mapita)
                    if(decoded.role == 'admin')         //filtro por rol de usuario
                        next();     //doy acceso
                    else    
                        res.status(403).send({message:'no tienes permisos suficientes'}) 
                }else{
                    next();     //doy acceso
                }
            });  
        }
        else res.status(403).send({message:'no tienes permisos suficientes'})   //sin permiso
    }else next();       //lo dejo pasar(esta en login)
}