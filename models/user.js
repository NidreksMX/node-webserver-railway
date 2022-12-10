

const {Schema, model} = require('mongoose');


const UsuarioSchema = Schema({
    name: {
        type: String,
        required: [true,'El nombre es obligatorio']
    },
    email: {
        type: String,
        required: [true,'the email  is necessary'],
        unique: true
    },
     password: {
        type: String,
         required: [true,'the password  is necessary'],
    
    },
    
    img: {
        type: String,
        required: true,
        enum: ['ADMIN_ROLE','USER_ROLE']

    },
    status: {
        type: Boolean,
        default: true
    },
    google: {
        type: Boolean,
        default: false
    },


});


module.exports = model('User',UsuarioSchema)
