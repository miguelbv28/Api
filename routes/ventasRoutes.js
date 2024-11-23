const express = require('express');
const VentaController = require('../controllers/ventasControllers');

const router = express.Router();

// Rutas para ventas
router.get('/ventas', VentaController.getAllVentas); // Obtener todas las ventas
router.post('/ventas', VentaController.createVenta); // Crear una nueva venta
router.get('/ventas/:id', VentaController.getVentaById); // Obtener una venta por ID
router.put('/ventas/:id', VentaController.updateVenta); // Actualizar una venta
router.delete('/ventas/:id', VentaController.deleteVenta); // Eliminar una venta

module.exports = router;
