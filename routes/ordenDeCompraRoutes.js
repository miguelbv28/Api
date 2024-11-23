const express = require('express');
const OrdenDeCompraController = require('../controllers/ordenDeCompraControllers');

const router = express.Router();

// Definición de rutas para órdenes de compra
router.get('/ordenes', OrdenDeCompraController.getAllOrdenes); // Obtener todas las órdenes
router.post('/ordenes', OrdenDeCompraController.createOrden); // Crear una nueva orden
router.get('/ordenes/:id', OrdenDeCompraController.getOrdenById); // Obtener una orden por ID
router.put('/ordenes/:id', OrdenDeCompraController.updateOrden); // Actualizar una orden
router.delete('/ordenes/:id', OrdenDeCompraController.deleteOrden); // Eliminar una orden

module.exports = router;
