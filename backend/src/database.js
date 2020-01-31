const MongoClient = require('mongodb').MongoClient
require('dotenv').config();  //before the application starts the variable starts .env



// var db

MongoClient.connect(
    process.env.MONGODB_URI,
    (err, client) => {
        if (err) return console.log(err)
        db = client.db(process.env.MONGO_NS) // whatever your database name is
    })


// process.env.MONGODB_URI,
//   { useNewUrlParser: true },
































// const mongoose = require('mongoose');



// const URI = process.env.MONGOOSE_URI
//     ? process.env.MONGOOSE_URI
//     : 'mongodb://localhost/dcivildatabase';


// mongoose.connect(URI, {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useFindAndModify: false
// });


// const connection = mongoose.connection;

// connection.once('open', () => {
//     console.log('Database is connected');
// });