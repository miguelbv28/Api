const express = require('express');
const VentaController = require('../controllers/ventasControllers');

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Ventas
 *   description: API para gestionar ventas
 */

/**
 * @swagger
 * /ventas:
 *   get:
 *     summary: Obtener todas las ventas
 *     tags: [Ventas]
 *     responses:
 *       200:
 *         description: Lista de ventas obtenida exitosamente
 *       500:
 *         description: Error en el servidor
 */
router.get('/ventas', VentaController.getAllVentas);

/**
 * @swagger
 * /ventas:
 *   post:
 *     summary: Crear una nueva venta
 *     tags: [Ventas]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - fecha
 *               - subtotal
 *               - total
 *               - usuarioid_usuario
 *               - clienteid_cliente
 *             properties:
 *               fecha:
 *                 type: string
 *                 format: date
 *               subtotal:
 *                 type: number
 *                 format: float
 *               total:
 *                 type: number
 *                 format: float
 *               usuarioid_usuario:
 *                 type: integer
 *               clienteid_cliente:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Venta creada exitosamente
 *       400:
 *         description: Error en la solicitud
 */
router.post('/ventas', VentaController.createVenta);

/**
 * @swagger
 * /ventas/{id}:
 *   get:
 *     summary: Obtener una venta por ID
 *     tags: [Ventas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la venta a obtener
 *     responses:
 *       200:
 *         description: Venta obtenida exitosamente
 *       404:
 *         description: Venta no encontrada
 */
router.get('/ventas/:id', VentaController.getVentaById);

/**
 * @swagger
 * /ventas/{id}:
 *   put:
 *     summary: Actualizar una venta por ID
 *     tags: [Ventas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la venta a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - fecha
 *               - subtotal
 *               - total
 *               - usuarioid_usuario
 *               - clienteid_cliente
 *             properties:
 *               fecha:
 *                 type: string
 *                 format: date
 *               subtotal:
 *                 type: number
 *                 format: float
 *               total:
 *                 type: number
 *                 format: float
 *               usuarioid_usuario:
 *                 type: integer
 *               clienteid_cliente:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Venta actualizada exitosamente
 *       404:
 *         description: Venta no encontrada
 */
router.put('/ventas/:id', VentaController.updateVenta);

/**
 * @swagger
 * /ventas/{id}:
 *   delete:
 *     summary: Eliminar una venta por ID
 *     tags: [Ventas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la venta a eliminar
 *     responses:
 *       200:
 *         description: Venta eliminada exitosamente
 *       404:
 *         description: Venta no encontrada
 */
router.delete('/ventas/:id', VentaController.deleteVenta);

module.exports = router;
