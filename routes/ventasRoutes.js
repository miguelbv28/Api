const express = require('express');
const VentaController = require('../controllers/ventasControllers');

const router = express.Router();

router.get('/ventas', VentaController.getAllVentas);
router.post('/ventas', VentaController.createVenta);
router.get('/ventas/:id', VentaController.getVentaById);
router.put('/ventas/:id', VentaController.updateVenta);
router.delete('/ventas/:id', VentaController.deleteVenta);

module.exports = router;
