

//rest server
require('dotenv').config();
const Server = require('./models/server');

const server = new Server();

//Levanta el servidor o clase server.js
server.listen();


