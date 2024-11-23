const express = require('express');
const RegistroAccesoController = require('../controllers/registroAccesoControllers');

const router = express.Router();

// Rutas para registro_acceso
router.get('/registro_acceso', RegistroAccesoController.getAllRegistros); // Obtener todos los registros
router.post('/registro_acceso', RegistroAccesoController.createRegistro); // Crear un nuevo registro
router.get('/registro_acceso/:id', RegistroAccesoController.getRegistroById); // Obtener un registro por ID
router.put('/registro_acceso/:id', RegistroAccesoController.updateRegistro); // Actualizar un registro
router.delete('/registro_acceso/:id', RegistroAccesoController.deleteRegistro); // Eliminar un registro

module.exports = router;
