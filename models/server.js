const express = require('express');
const cors = require('cors');
const { Router } = require('express');

const {dbConnection} = require('../database/config')


//clase servidor 
class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
      
        //constructor con variable del path 
        this.usuariosRoutePath = '/api/usuarios';
      //Conecta la bd
        this.conectarDB();
      
        //Middlewares metodo
        this.middlewares();

        //funcion que siempre se ejecuta cuando se levanta el servidor

        //Rutas de mi aplicacion
        this.routes();
    }


    //Conectar a base de datos
   async conectarDB(){
    await dbConnection();

   }


    middlewares() {
        //use es la palabra clave para uso de los middlewares
        
        //CORS
        this.app.use(cors()); 
        
        //Lectura y parseo del body
        this.app.use(express.json());

        //Directorio publico
        this.app.use(express.static('public'));
    }



    routes() {

        //middelware con direccion al path de usuarios que hace uso de routes/usuarios
        this.app.use(this.usuariosRoutePath, require('../routes/user'));

    }



    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto', this.port);

        });


    }


}

module.exports = Server;




