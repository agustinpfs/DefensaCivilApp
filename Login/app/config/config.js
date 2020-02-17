module.exports = {
    PORT: process.env.PORT || 5000,
    DB: process.env.DB || 'mongodb://localhost:27017/api',
    SECRET_TOKEN: process.env.SECRET_TOKEN || 'SecretKey'       //necesario para el logueo
}