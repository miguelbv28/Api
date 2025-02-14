const express = require('express');
const ProveedorController = require('../controllers/proveedorControllers');

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Proveedores
 *   description: API para gestionar proveedores
 */

/**
 * @swagger
 * /proveedores:
 *   get:
 *     summary: Obtener todos los proveedores
 *     tags: [Proveedores]
 *     responses:
 *       200:
 *         description: Lista de proveedores obtenida exitosamente
 *       500:
 *         description: Error en el servidor
 */
router.get('/proveedores', ProveedorController.getAllProveedores);

/**
 * @swagger
 * /proveedores:
 *   post:
 *     summary: Crear un nuevo proveedor
 *     tags: [Proveedores]
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
 *               - telefono1
 *               - email
 *             properties:
 *               razon_social:
 *                 type: string
 *               domicilio:
 *                 type: string
 *               rfc:
 *                 type: string
 *               telefono1:
 *                 type: string
 *               email:
 *                 type: string
 *     responses:
 *       201:
 *         description: Proveedor creado exitosamente
 *       400:
 *         description: Error en la solicitud
 */
router.post('/proveedores', ProveedorController.createProveedor);

/**
 * @swagger
 * /proveedores/{id}:
 *   get:
 *     summary: Obtener un proveedor por ID
 *     tags: [Proveedores]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del proveedor a obtener
 *     responses:
 *       200:
 *         description: Proveedor obtenido exitosamente
 *       404:
 *         description: Proveedor no encontrado
 */
router.get('/proveedores/:id', ProveedorController.getProveedorById);

/**
 * @swagger
 * /proveedores/{id}:
 *   put:
 *     summary: Actualizar un proveedor por ID
 *     tags: [Proveedores]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del proveedor a actualizar
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
 *               - telefono1
 *               - email
 *             properties:
 *               razon_social:
 *                 type: string
 *               domicilio:
 *                 type: string
 *               rfc:
 *                 type: string
 *               telefono1:
 *                 type: string
 *               email:
 *                 type: string
 *     responses:
 *       200:
 *         description: Proveedor actualizado exitosamente
 *       404:
 *         description: Proveedor no encontrado
 */
router.put('/proveedores/:id', ProveedorController.updateProveedor);

/**
 * @swagger
 * /proveedores/{id}:
 *   delete:
 *     summary: Eliminar un proveedor por ID
 *     tags: [Proveedores]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del proveedor a eliminar
 *     responses:
 *       200:
 *         description: Proveedor eliminado exitosamente
 *       404:
 *         description: Proveedor no encontrado
 */
router.delete('/proveedores/:id', ProveedorController.deleteProveedor);

module.exports = router;
