
const {Router} =require('express');

const { usuariosGet, usuariosDelete, usuariosPost, usuariosPatch, usuariosPut } = require('../controllers/user');

const router = Router();

//aqui hago uso de la funcion users/usuarios de controladores
//end pointS
router.get('/', usuariosGet); 

router.post('/', usuariosPost);
//con los : se le indica que esperamos o como buscaremos
router.put('/:id', usuariosPut);

router.patch('/', usuariosPatch);

router.delete('/', usuariosDelete);








module.exports = router;





