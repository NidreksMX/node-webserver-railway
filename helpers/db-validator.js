const Role = require('../models/role');
const Usuario = require ('../models/user')

const esRoleValido = async (role = '') =>{
    const existRole  = await Role.findOne({role});
    if( !existRole){
    throw new Error(`El rol ${role} no es valido `);
     }
     
}

const emailExiste = async (email = '') =>{
 //verificar el correo
 const existeEmail = await Usuario.findOne({ email });
 if( existeEmail ){
    throw new Error(`El correo: ${email}, ya esta registrado`);       
    }
}



module.exports = {
    esRoleValido,
    emailExiste
}


