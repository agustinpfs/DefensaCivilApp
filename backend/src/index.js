require('dotenv').config();  //before the application starts the variable starts .env

const app = require('./app');
require('./database');



async function main() {
    await app.listen(app.get('port'));
    console.log('Server on port', app.get('port'));
}

main()