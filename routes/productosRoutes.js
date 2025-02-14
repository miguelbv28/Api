const express = require('express');
const ProductoController = require('../controllers/productosControllers');

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Productos
 *   description: API para gestionar productos
 */

/**
 * @swagger
 * /productos:
 *   get:
 *     summary: Obtener todos los productos
 *     tags: [Productos]
 *     responses:
 *       200:
 *         description: Lista de productos obtenida exitosamente
 *       500:
 *         description: Error en el servidor
 */
router.get('/productos', ProductoController.getAllProductos);

/**
 * @swagger
 * /productos:
 *   post:
 *     summary: Crear un nuevo producto
 *     tags: [Productos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - existencia
 *               - nombre_producto
 *               - precio_venta
 *               - proveedorid_proveedor
 *             properties:
 *               existencia:
 *                 type: integer
 *               nombre_producto:
 *                 type: string
 *               precio_venta:
 *                 type: number
 *               proveedorid_proveedor:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Producto creado exitosamente
 *       400:
 *         description: Error en la solicitud
 */
router.post('/productos', ProductoController.createProducto);

/**
 * @swagger
 * /productos/{id}:
 *   get:
 *     summary: Obtener un producto por ID
 *     tags: [Productos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del producto a obtener
 *     responses:
 *       200:
 *         description: Producto obtenido exitosamente
 *       404:
 *         description: Producto no encontrado
 */
router.get('/productos/:id', ProductoController.getProductoById);

/**
 * @swagger
 * /productos/{id}:
 *   put:
 *     summary: Actualizar un producto por ID
 *     tags: [Productos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del producto a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - existencia
 *               - nombre_producto
 *               - precio_venta
 *               - proveedorid_proveedor
 *             properties:
 *               existencia:
 *                 type: integer
 *               nombre_producto:
 *                 type: string
 *               precio_venta:
 *                 type: number
 *               proveedorid_proveedor:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Producto actualizado exitosamente
 *       404:
 *         description: Producto no encontrado
 */
router.put('/productos/:id', ProductoController.updateProducto);

/**
 * @swagger
 * /productos/{id}:
 *   delete:
 *     summary: Eliminar un producto por ID
 *     tags: [Productos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del producto a eliminar
 *     responses:
 *       200:
 *         description: Producto eliminado exitosamente
 *       404:
 *         description: Producto no encontrado
 */
router.delete('/productos/:id', ProductoController.deleteProducto);

module.exports = router;
