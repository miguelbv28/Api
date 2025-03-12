const express = require('express');
const ProveedorController = require('../controllers/proveedorControllers');

const router = express.Router();

router.get('/proveedores', ProveedorController.getAllProveedores);
router.post('/proveedores', ProveedorController.createProveedor);
router.get('/proveedores/:id', ProveedorController.getProveedorById);
router.put('/proveedores/:id', ProveedorController.updateProveedor);
router.delete('/proveedores/:id', ProveedorController.deleteProveedor);

module.exports = router;
