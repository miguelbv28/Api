const express = require('express');
const UsuarioController = require('../controllers/usuarioControllers');

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Usuarios
 *   description: API para gestionar usuarios
 */

/**
 * @swagger
 * /usuarios:
 *   get:
 *     summary: Obtener todos los usuarios
 *     tags: [Usuarios]
 *     responses:
 *       200:
 *         description: Lista de usuarios obtenida exitosamente
 *       500:
 *         description: Error en el servidor
 */
router.get('/usuarios', UsuarioController.getAllUsuarios);

/**
 * @swagger
 * /usuarios:
 *   post:
 *     summary: Crear un nuevo usuario
 *     tags: [Usuarios]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - usuario
 *               - contrasena
 *               - nombre
 *               - apellido_paterno
 *               - email
 *               - domicilio
 *             properties:
 *               usuario:
 *                 type: string
 *               contrasena:
 *                 type: string
 *               nombre:
 *                 type: string
 *               apellido_paterno:
 *                 type: string
 *               apellido_materno:
 *                 type: string
 *               email:
 *                 type: string
 *                 format: email
 *               domicilio:
 *                 type: string
 *     responses:
 *       201:
 *         description: Usuario creado exitosamente
 *       400:
 *         description: Error en la solicitud
 */
router.post('/usuarios', UsuarioController.createUsuario);

/**
 * @swagger
 * /usuarios/{id}:
 *   get:
 *     summary: Obtener un usuario por ID
 *     tags: [Usuarios]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del usuario a obtener
 *     responses:
 *       200:
 *         description: Usuario obtenido exitosamente
 *       404:
 *         description: Usuario no encontrado
 */
router.get('/usuarios/:id', UsuarioController.getUsuarioById);

/**
 * @swagger
 * /usuarios/{id}:
 *   put:
 *     summary: Actualizar un usuario por ID
 *     tags: [Usuarios]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del usuario a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - usuario
 *               - contrasena
 *               - nombre
 *               - apellido_paterno
 *               - email
 *               - domicilio
 *             properties:
 *               usuario:
 *                 type: string
 *               contrasena:
 *                 type: string
 *               nombre:
 *                 type: string
 *               apellido_paterno:
 *                 type: string
 *               apellido_materno:
 *                 type: string
 *               email:
 *                 type: string
 *                 format: email
 *               domicilio:
 *                 type: string
 *     responses:
 *       200:
 *         description: Usuario actualizado correctamente
 *       404:
 *         description: Usuario no encontrado
 */
router.put('/usuarios/:id', UsuarioController.updateUsuario);

/**
 * @swagger
 * /usuarios/{id}:
 *   delete:
 *     summary: Eliminar un usuario por ID
 *     tags: [Usuarios]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del usuario a eliminar
 *     responses:
 *       200:
 *         description: Usuario eliminado exitosamente
 *       404:
 *         description: Usuario no encontrado
 */
router.delete('/usuarios/:id', UsuarioController.deleteUsuario);

module.exports = router;
