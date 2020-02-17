//imports
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

//schema de coleccion User en mongoDB
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    role: {
        type: String,
        default: 'dataentry',
        enum: [
            'dataentry',
            'admin',
        ]
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    sign_up_date: {
        type: Date,
        default: Date.now()
    },
    last_login_date: {
        type: Date,
        default: Date.now()
    }
});

//antes de guardar encrypta
//el next referencia al metodo save
UserSchema.pre('save',function(next){
    bcrypt.genSalt(10).then(salts => {
        bcrypt.hash(this.password,salts).then(hash => {
            this.password = hash;
            next();
        }).catch(error => next(error));
    }).catch(error => next(error));
});

//constante User refenrencia la estructura del schema aqui creado
const User = mongoose.model('User',UserSchema);

//exporto el schema
module.exports = User;