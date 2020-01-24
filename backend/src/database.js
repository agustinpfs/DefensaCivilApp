const mongoose = require('mongoose');



const URI = process.env.MONGOOSE_URI
    ? process.env.MONGOOSE_URI
    : 'mongodb://localhost/dcivildatabase';


mongoose.connect(URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
});


const connection = mongoose.connection;

connection.once('open', () => {
    console.log('Database is connected');
});