const express = require('express');
const ClienteController = require('../controllers/clienteControllers');

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Clientes
 *   description: API para gestionar clientes
 */

/**
 * @swagger
 * /clientes:
 *   get:
 *     summary: Obtener todos los clientes
 *     tags: [Clientes]
 *     responses:
 *       200:
 *         description: Lista de clientes obtenida exitosamente
 *       500:
 *         description: Error en el servidor
 */
router.get('/clientes', ClienteController.getAllClientes);

/**
 * @swagger
 * /clientes:
 *   post:
 *     summary: Crear un nuevo cliente
 *     tags: [Clientes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - razon_social
 *               - domicilio
 *               - rfc
 *               - telefono
 *               - email
 *             properties:
 *               razon_social:
 *                 type: string
 *               domicilio:
 *                 type: string
 *               rfc:
 *                 type: string
 *               telefono:
 *                 type: string
 *               email:
 *                 type: string
 *     responses:
 *       201:
 *         description: Cliente creado exitosamente
 *       400:
 *         description: Error en la solicitud
 */
router.post('/clientes', ClienteController.createCliente);

/**
 * @swagger
 * /clientes/{id}:
 *   get:
 *     summary: Obtener un cliente por ID
 *     tags: [Clientes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del cliente a obtener
 *     responses:
 *       200:
 *         description: Cliente obtenido exitosamente
 *       404:
 *         description: Cliente no encontrado
 */
router.get('/clientes/:id', ClienteController.getClienteById);

/**
 * @swagger
 * /clientes/{id}:
 *   put:
 *     summary: Actualizar un cliente por ID
 *     tags: [Clientes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del cliente a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - razon_social
 *               - domicilio
 *               - rfc
 *               - telefono
 *               - email
 *             properties:
 *               razon_social:
 *                 type: string
 *               domicilio:
 *                 type: string
 *               rfc:
 *                 type: string
 *               telefono:
 *                 type: string
 *               email:
 *                 type: string
 *     responses:
 *       200:
 *         description: Cliente actualizado exitosamente
 *       404:
 *         description: Cliente no encontrado
 */
router.put('/clientes/:id', ClienteController.updateCliente);

/**
 * @swagger
 * /clientes/{id}:
 *   delete:
 *     summary: Eliminar un cliente por ID
 *     tags: [Clientes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del cliente a eliminar
 *     responses:
 *       200:
 *         description: Cliente eliminado exitosamente
 *       404:
 *         description: Cliente no encontrado
 */
router.delete('/clientes/:id', ClienteController.deleteCliente);

module.exports = router;
