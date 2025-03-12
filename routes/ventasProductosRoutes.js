const express = require('express');
const VentaProductoController = require('../controllers/ventasProductosControllers');

const router = express.Router();

router.get('/ventas-productos', VentaProductoController.getAllVentasProductos);
router.post('/ventas-productos', VentaProductoController.createVentaProducto);
router.get('/ventas-productos/:ventasid_venta/:productosid_producto', VentaProductoController.getVentaProductoById);
router.put('/ventas-productos/:ventasid_venta/:productosid_producto', VentaProductoController.updateVentaProducto);
router.delete('/ventas-productos/:ventasid_venta/:productosid_producto', VentaProductoController.deleteVentaProducto);

module.exports = router;
