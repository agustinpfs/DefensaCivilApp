//imports
const mongoose = require('mongoose');
const CONFIG = require('./config');

// exporto variable connection y una funcion que es la encargada de realizar la conexion

module.exports = {
    connection: null,
    connect: function(){
        if(this.connection)
            return this.connection;
        return mongoose.connect(CONFIG.DB,{useNewUrlParser:true,useUnifiedTopology:true,useCreateIndex:true}).then(connection => {
            this.connection = connection;
            console.log('DATABASE CONNECTION SUCCESS');   
        }).catch(error => console.log(error));
    }
}