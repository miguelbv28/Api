const express = require('express');
const OrdenDeCompraController = require('../controllers/ordenDeCompraControllers');

const router = express.Router();

router.get('/ordenes', OrdenDeCompraController.getAllOrdenes);
router.post('/ordenes', OrdenDeCompraController.createOrden);
router.get('/ordenes/:id', OrdenDeCompraController.getOrdenById);
router.put('/ordenes/:id', OrdenDeCompraController.updateOrden);
router.delete('/ordenes/:id', OrdenDeCompraController.deleteOrden);

module.exports = router;

