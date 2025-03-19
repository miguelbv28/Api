const Usuario = require('../models/usuarioModels');

class UsuarioController {

    static async getAllUsuarios(req, res) {
        try {
            const usuarios = await Usuario.findAll();
            res.json(usuarios);
        } catch (error) {
            res.status(500).json({ mensaje: error.message });
        }
    }

    static async createUsuario(req, res) {
        try {
            const { usuario, contrasena, nombre, apellido_paterno, apellido_materno, email, domicilio } = req.body;

            if (!usuario || !contrasena || !nombre || !apellido_paterno || !email || !domicilio) {
                return res.status(400).json({ mensaje: "Todos los campos obligatorios deben ser proporcionados" });
            }

            const nuevoUsuario = await Usuario.create(req.body);
            res.status(201).json(nuevoUsuario);
        } catch (error) {
            res.status(500).json({ mensaje: error.message });
        }
    }

    static async getUsuarioById(req, res) {
        try {
            const usuario = await Usuario.findById(req.params.id);
            if (!usuario) {
                return res.status(404).json({ mensaje: "Usuario no encontrado" });
            }
            res.json(usuario);
        } catch (error) {
            res.status(500).json({ mensaje: error.message });
        }
    }

    static async updateUsuario(req, res) {
        try {
            const { usuario, contrasena, nombre, apellido_paterno, apellido_materno, email, domicilio } = req.body;

            if (!usuario || !contrasena || !nombre || !apellido_paterno || !email || !domicilio) {
                return res.status(400).json({ mensaje: "Todos los campos obligatorios deben ser proporcionados" });
            }

            const usuarioActualizado = await Usuario.update(req.params.id, req.body);
            if (!usuarioActualizado) {
                return res.status(404).json({ mensaje: "Usuario no encontrado" });
            }
            res.json(usuarioActualizado);
        } catch (error) {
            res.status(500).json({ mensaje: error.message });
        }
    }

    static async deleteUsuario(req, res) {
        try {
            const resultado = await Usuario.delete(req.params.id);
            if (resultado === 0) {
                return res.status(404).json({ mensaje: 'Usuario no encontrado' });
            }
            res.status(200).json({ mensaje: 'Usuario eliminado correctamente' });
        } catch (error) {
            res.status(500).json({ mensaje: error.message });
        }
    }
    // nuevo metodo para el login
    static async loginUsuario(req, res) {
        try {
            const { email, contrasena } = req.body;
    
            if (!email || !contrasena) {
                return res.status(400).json({ mensaje: "Email y contraseña son requeridos" });
            }
    
            // Buscar usuario por email
            const usuario = await Usuario.findByEmail(email);
            if (!usuario) {
                return res.status(404).json({ mensaje: "Usuario no encontrado" });
            }
    
            // Verificar la contraseña
            if (usuario.contrasena !== contrasena) {
                return res.status(401).json({ mensaje: "Contraseña incorrecta" });
            }
    
            // Responder con éxito, puedes agregar un token de sesión si usas JWT
            res.json({ mensaje: "Inicio de sesión exitoso", usuario });
        } catch (error) {
            res.status(500).json({ mensaje: error.message });
        }
    }
}

module.exports = UsuarioController;
