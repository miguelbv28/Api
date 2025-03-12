const express = require('express');
const ClienteController = require('../controllers/clienteControllers');

const router = express.Router();

router.get('/clientes', ClienteController.getAllClientes);
router.post('/clientes', ClienteController.createCliente);
router.get('/clientes/:id', ClienteController.getClienteById);
router.put('/clientes/:id', ClienteController.updateCliente);
router.delete('/clientes/:id', ClienteController.deleteCliente);

module.exports = router;
