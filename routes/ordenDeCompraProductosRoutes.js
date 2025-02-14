const express = require('express');
const OrdenDeCompraProductoController = require('../controllers/ordenDeCompraProductosControllers');

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: OrdenDeCompraProductos
 *   description: API para gestionar productos en las órdenes de compra
 */

/**
 * @swagger
 * /orden-de-compra-productos:
 *   get:
 *     summary: Obtener todos los productos en órdenes de compra
 *     tags: [OrdenDeCompraProductos]
 *     responses:
 *       200:
 *         description: Lista de productos en órdenes de compra obtenida exitosamente
 *       500:
 *         description: Error en el servidor
 */
router.get('/orden-de-compra-productos', OrdenDeCompraProductoController.getAll);

/**
 * @swagger
 * /orden-de-compra-productos:
 *   post:
 *     summary: Agregar un producto a una orden de compra
 *     tags: [OrdenDeCompraProductos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - orden_de_compraid_orden
 *               - productosid_producto
 *               - cantidad_solicitada
 *               - cantidad_recibida
 *               - estado_producto
 *               - subtotal_producto
 *               - precio_compra
 *             properties:
 *               orden_de_compraid_orden:
 *                 type: integer
 *               productosid_producto:
 *                 type: integer
 *               cantidad_solicitada:
 *                 type: integer
 *               cantidad_recibida:
 *                 type: integer
 *               estado_producto:
 *                 type: string
 *               subtotal_producto:
 *                 type: number
 *                 format: float
 *               precio_compra:
 *                 type: number
 *                 format: float
 *     responses:
 *       201:
 *         description: Producto agregado a la orden de compra exitosamente
 *       400:
 *         description: Error en la solicitud
 */
router.post('/orden-de-compra-productos', OrdenDeCompraProductoController.create);

/**
 * @swagger
 * /orden-de-compra-productos/{ordenId}/{productoId}:
 *   get:
 *     summary: Obtener un producto de una orden de compra por ID
 *     tags: [OrdenDeCompraProductos]
 *     parameters:
 *       - in: path
 *         name: ordenId
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la orden de compra
 *       - in: path
 *         name: productoId
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del producto
 *     responses:
 *       200:
 *         description: Producto encontrado en la orden de compra
 *       404:
 *         description: Producto no encontrado en la orden de compra
 */
router.get('/orden-de-compra-productos/:ordenId/:productoId', OrdenDeCompraProductoController.getById);

/**
 * @swagger
 * /orden-de-compra-productos/{ordenId}/{productoId}:
 *   put:
 *     summary: Actualizar un producto en una orden de compra
 *     tags: [OrdenDeCompraProductos]
 *     parameters:
 *       - in: path
 *         name: ordenId
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la orden de compra
 *       - in: path
 *         name: productoId
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
 *             properties:
 *               cantidad_solicitada:
 *                 type: integer
 *               cantidad_recibida:
 *                 type: integer
 *               estado_producto:
 *                 type: string
 *               subtotal_producto:
 *                 type: number
 *                 format: float
 *               precio_compra:
 *                 type: number
 *                 format: float
 *     responses:
 *       200:
 *         description: Producto en la orden de compra actualizado correctamente
 *       404:
 *         description: Producto no encontrado en la orden de compra
 */
router.put('/orden-de-compra-productos/:ordenId/:productoId', OrdenDeCompraProductoController.update);

/**
 * @swagger
 * /orden-de-compra-productos/{ordenId}/{productoId}:
 *   delete:
 *     summary: Eliminar un producto de una orden de compra
 *     tags: [OrdenDeCompraProductos]
 *     parameters:
 *       - in: path
 *         name: ordenId
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la orden de compra
 *       - in: path
 *         name: productoId
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del producto
 *     responses:
 *       200:
 *         description: Producto eliminado de la orden de compra exitosamente
 *       404:
 *         description: Producto no encontrado en la orden de compra
 */
router.delete('/orden-de-compra-productos/:ordenId/:productoId', OrdenDeCompraProductoController.delete);

module.exports = router;
