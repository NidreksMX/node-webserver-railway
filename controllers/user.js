const {response} = require('express');

//packete controllers para los callbacks 
//funcion usuariosGet

const usuariosGet = (req, res = response) => {
    //Regresamos un objeto         
    res.json({
        msg: 'get API - controlador'
    });
};


const usuariosPost = (req, res = response) => {
    //con ese request leemos lo que la persona mando 
    
    //{variables dentro} con esta forma me aseguro de solo tomar esas variables como filtro
    const {nombre, edad} = req.body;
    
    res.json({
        msg: 'post API - controlador',
        body
    });
};
const usuariosPut = (req, res = response) => {
    //recibe del request un parametro que se indico en la ruta que es el id       
    const {id} = req.params.id;
    res.json({
        msg: 'put API - controlador'
    });
};

const usuariosPatch = (req, res = response) => {
            
    res.json({
        msg: 'patch API - controlador'
    });
};

const usuariosDelete = (req, res = response) => {
           
    res.json({
        msg: 'delete API - controlador'
    });
};





//aqui exporto los modulos de las funciones para hacer uso de ellas
module.exports = {

    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete,
}







