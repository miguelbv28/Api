const express = require('express');
const OrdenDeCompraController = require('../controllers/ordenDeCompraControllers');

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: OrdenesDeCompra
 *   description: API para gestionar órdenes de compra
 */

/**
 * @swagger
 * /ordenes:
 *   get:
 *     summary: Obtener todas las órdenes de compra
 *     tags: [OrdenesDeCompra]
 *     responses:
 *       200:
 *         description: Lista de órdenes obtenida exitosamente
 *       500:
 *         description: Error en el servidor
 */
router.get('/ordenes', OrdenDeCompraController.getAllOrdenes);

/**
 * @swagger
 * /ordenes:
 *   post:
 *     summary: Crear una nueva orden de compra
 *     tags: [OrdenesDeCompra]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - fecha_creacion
 *               - subtotal
 *               - total
 *               - estado_orden
 *               - usuarioid_usuario
 *               - proveedorid_proveedor
 *             properties:
 *               fecha_creacion:
 *                 type: string
 *                 format: date
 *               subtotal:
 *                 type: number
 *               total:
 *                 type: number
 *               estado_orden:
 *                 type: string
 *               usuarioid_usuario:
 *                 type: integer
 *               proveedorid_proveedor:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Orden creada exitosamente
 *       400:
 *         description: Error en la solicitud
 */
router.post('/ordenes', OrdenDeCompraController.createOrden);

/**
 * @swagger
 * /ordenes/{id}:
 *   get:
 *     summary: Obtener una orden de compra por ID
 *     tags: [OrdenesDeCompra]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la orden de compra a obtener
 *     responses:
 *       200:
 *         description: Orden obtenida exitosamente
 *       404:
 *         description: Orden no encontrada
 */
router.get('/ordenes/:id', OrdenDeCompraController.getOrdenById);

/**
 * @swagger
 * /ordenes/{id}:
 *   put:
 *     summary: Actualizar una orden de compra por ID
 *     tags: [OrdenesDeCompra]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la orden de compra a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - fecha_creacion
 *               - subtotal
 *               - total
 *               - estado_orden
 *               - usuarioid_usuario
 *               - proveedorid_proveedor
 *             properties:
 *               fecha_creacion:
 *                 type: string
 *                 format: date
 *               subtotal:
 *                 type: number
 *               total:
 *                 type: number
 *               estado_orden:
 *                 type: string
 *               usuarioid_usuario:
 *                 type: integer
 *               proveedorid_proveedor:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Orden actualizada exitosamente
 *       404:
 *         description: Orden no encontrada
 */
router.put('/ordenes/:id', OrdenDeCompraController.updateOrden);

/**
 * @swagger
 * /ordenes/{id}:
 *   delete:
 *     summary: Eliminar una orden de compra por ID
 *     tags: [OrdenesDeCompra]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la orden de compra a eliminar
 *     responses:
 *       200:
 *         description: Orden eliminada exitosamente
 *       404:
 *         description: Orden no encontrada
 */
router.delete('/ordenes/:id', OrdenDeCompraController.deleteOrden);

module.exports = router;
