const express = require('express');
const ClienteController = require('../controllers/clienteControllers');

const router = express.Router();

// Definición de rutas para clientes
router.get('/clientes', ClienteController.getAllClientes); // Obtener todos los clientes
router.post('/clientes', ClienteController.createCliente); // Crear un nuevo cliente
router.get('/clientes/:id', ClienteController.getClienteById); // Obtener un cliente por ID
router.put('/clientes/:id', ClienteController.updateCliente); // Actualizar un cliente
router.delete('/clientes/:id', ClienteController.deleteCliente); // Eliminar un cliente

module.exports = router;
