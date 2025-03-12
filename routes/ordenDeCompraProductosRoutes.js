const express = require('express');
const OrdenDeCompraProductoController = require('../controllers/ordenDeCompraProductosControllers');

const router = express.Router();

router.get('/orden-de-compra-productos', OrdenDeCompraProductoController.getAll);
router.post('/orden-de-compra-productos', OrdenDeCompraProductoController.create);
router.get('/orden-de-compra-productos/:ordenId/:productoId', OrdenDeCompraProductoController.getById);
router.put('/orden-de-compra-productos/:ordenId/:productoId', OrdenDeCompraProductoController.update);
router.delete('/orden-de-compra-productos/:ordenId/:productoId', OrdenDeCompraProductoController.delete);

module.exports = router;
