const express = require('express');
const VentaProductoController = require('../controllers/ventasProductosControllers');

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: VentasProductos
 *   description: API para gestionar la relación entre ventas y productos
 */

/**
 * @swagger
 * /ventas-productos:
 *   get:
 *     summary: Obtener todas las relaciones de ventas y productos
 *     tags: [VentasProductos]
 *     responses:
 *       200:
 *         description: Lista de ventas-productos obtenida exitosamente
 *       500:
 *         description: Error en el servidor
 */
router.get('/ventas-productos', VentaProductoController.getAllVentasProductos);

/**
 * @swagger
 * /ventas-productos:
 *   post:
 *     summary: Crear una nueva relación de venta y producto
 *     tags: [VentasProductos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - ventasid_venta
 *               - productosid_producto
 *               - cantidad
 *               - precio_unitario
 *               - subtotal_producto
 *             properties:
 *               ventasid_venta:
 *                 type: integer
 *               productosid_producto:
 *                 type: integer
 *               cantidad:
 *                 type: integer
 *               precio_unitario:
 *                 type: number
 *                 format: float
 *               subtotal_producto:
 *                 type: number
 *                 format: float
 *     responses:
 *       201:
 *         description: Relación venta-producto creada exitosamente
 *       400:
 *         description: Error en la solicitud
 */
router.post('/ventas-productos', VentaProductoController.createVentaProducto);

/**
 * @swagger
 * /ventas-productos/{ventasid_venta}/{productosid_producto}:
 *   get:
 *     summary: Obtener una relación de venta y producto por ID
 *     tags: [VentasProductos]
 *     parameters:
 *       - in: path
 *         name: ventasid_venta
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la venta
 *       - in: path
 *         name: productosid_producto
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del producto
 *     responses:
 *       200:
 *         description: Relación venta-producto obtenida exitosamente
 *       404:
 *         description: Relación no encontrada
 */
router.get('/ventas-productos/:ventasid_venta/:productosid_producto', VentaProductoController.getVentaProductoById);

/**
 * @swagger
 * /ventas-productos/{ventasid_venta}/{productosid_producto}:
 *   put:
 *     summary: Actualizar una relación de venta y producto por ID
 *     tags: [VentasProductos]
 *     parameters:
 *       - in: path
 *         name: ventasid_venta
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la venta
 *       - in: path
 *         name: productosid_producto
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del producto
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - cantidad
 *               - precio_unitario
 *               - subtotal_producto
 *             properties:
 *               cantidad:
 *                 type: integer
 *               precio_unitario:
 *                 type: number
 *                 format: float
 *               subtotal_producto:
 *                 type: number
 *                 format: float
 *     responses:
 *       200:
 *         description: Relación venta-producto actualizada exitosamente
 *       404:
 *         description: Relación no encontrada
 */
router.put('/ventas-productos/:ventasid_venta/:productosid_producto', VentaProductoController.updateVentaProducto);

/**
 * @swagger
 * /ventas-productos/{ventasid_venta}/{productosid_producto}:
 *   delete:
 *     summary: Eliminar una relación de venta y producto por ID
 *     tags: [VentasProductos]
 *     parameters:
 *       - in: path
 *         name: ventasid_venta
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la venta
 *       - in: path
 *         name: productosid_producto
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del producto
 *     responses:
 *       200:
 *         description: Relación venta-producto eliminada exitosamente
 *       404:
 *         description: Relación no encontrada
 */
router.delete('/ventas-productos/:ventasid_venta/:productosid_producto', VentaProductoController.deleteVentaProducto);

module.exports = router;
