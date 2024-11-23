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
            const usuario = await Usuario.create(req.body);
            res.status(201).json(usuario);
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
            const usuario = await Usuario.update(req.params.id, req.body);
            if (!usuario) {
                return res.status(404).json({ mensaje: "Usuario no encontrado" });
            }
            res.json(usuario);
        } catch (error) {
            res.status(500).json({ mensaje: error.message });
        }
    }

    static async deleteUsuario(req, res) {
        const usuarioId = req.params.id;
        try {
            const result = await Usuario.delete(usuarioId);
            if (result === 0) {
                return res.status(404).json({ mensaje: 'Usuario no encontrado' });
            }
            res.status(200).json({ mensaje: 'Usuario eliminado correctamente' });
        } catch (err) {
            res.status(500).json({ mensaje: err.message });
        }
    }
}

module.exports = UsuarioController;
