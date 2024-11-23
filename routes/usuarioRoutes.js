const express = require('express');
const UsuarioController = require('../controllers/usuarioControllers');

const router = express.Router();

// Definición de rutas para usuarios
router.get('/usuarios', UsuarioController.getAllUsuarios); // Obtener todos los usuarios
router.post('/usuarios', UsuarioController.createUsuario); // Crear un nuevo usuario
router.get('/usuarios/:id', UsuarioController.getUsuarioById); // Obtener un usuario por ID
router.put('/usuarios/:id', UsuarioController.updateUsuario); // Actualizar un usuario
router.delete('/usuarios/:id', UsuarioController.deleteUsuario); // Eliminar un usuario

module.exports = router;
