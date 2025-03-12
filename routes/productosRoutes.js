const express = require('express');
const ProductoController = require('../controllers/productosControllers');

const router = express.Router();

router.get('/productos', ProductoController.getAllProductos);
router.post('/productos', ProductoController.createProducto);
router.get('/productos/:id', ProductoController.getProductoById);
router.put('/productos/:id', ProductoController.updateProducto);
router.delete('/productos/:id', ProductoController.deleteProducto);

module.exports = router;
