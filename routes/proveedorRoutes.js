const express = require('express');
const ProveedorController = require('../controllers/proveedorControllers');

const router = express.Router();

// Definición de rutas para proveedores
router.get('/proveedores', ProveedorController.getAllProveedores); // Obtener todos los proveedores
router.post('/proveedores', ProveedorController.createProveedor); // Crear un nuevo proveedor
router.get('/proveedores/:id', ProveedorController.getProveedorById); // Obtener un proveedor por ID
router.put('/proveedores/:id', ProveedorController.updateProveedor); // Actualizar un proveedor
router.delete('/proveedores/:id', ProveedorController.deleteProveedor); // Eliminar un proveedor

module.exports = router;
