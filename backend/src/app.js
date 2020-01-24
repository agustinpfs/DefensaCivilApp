const express = require('express');
const cors = require('cors');
const app = express();

// settings

app.set('port', process.env.PORT || 3000);   // send data to frontend - from app set the port('port' is a variable - 4000 is the value)
                                        // If process.env.PORT exist, catch it(.env). If not use 4000.




// middlewares
app.use(cors());            //data between servers
app.use(express.json());    //send json files

// routes

app.use('/api/geo', require('./routes/geo'));


module.exports = app;