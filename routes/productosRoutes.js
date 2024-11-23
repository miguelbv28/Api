const express = require('express');
const ProductoController = require('../controllers/productosControllers');

const router = express.Router();

// Rutas para productos
router.get('/productos', ProductoController.getAllProductos); // Obtener todos los productos
router.post('/productos', ProductoController.createProducto); // Crear un nuevo producto
router.get('/productos/:id', ProductoController.getProductoById); // Obtener un producto por ID
router.put('/productos/:id', ProductoController.updateProducto); // Actualizar un producto
router.delete('/productos/:id', ProductoController.deleteProducto); // Eliminar un producto

module.exports = router;
