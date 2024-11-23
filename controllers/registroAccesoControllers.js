const RegistroAcceso = require('../models/registroAccesoModels');

class RegistroAccesoController {

    static async getAllRegistros(req, res) {
        try {
            const registros = await RegistroAcceso.findAll();
            res.json(registros);
        } catch (error) {
            res.status(500).json({ mensaje: error.message });
        }
    }

    static async createRegistro(req, res) {
        try {
            const registro = await RegistroAcceso.create(req.body);
            res.status(201).json(registro);
        } catch (error) {
            res.status(500).json({ mensaje: error.message });
        }
    }

    static async getRegistroById(req, res) {
        try {
            const registro = await RegistroAcceso.findById(req.params.id);
            if (!registro) {
                return res.status(404).json({ mensaje: "Registro no encontrado" });
            }
            res.json(registro);
        } catch (error) {
            res.status(500).json({ mensaje: error.message });
        }
    }

    static async updateRegistro(req, res) {
        try {
            const registro = await RegistroAcceso.update(req.params.id, req.body);
            if (!registro) {
                return res.status(404).json({ mensaje: "Registro no encontrado" });
            }
            res.json(registro);
        } catch (error) {
            res.status(500).json({ mensaje: error.message });
        }
    }

    static async deleteRegistro(req, res) {
        const registroId = req.params.id;
        try {
            const result = await RegistroAcceso.delete(registroId);
            if (result === 0) {
                return res.status(404).json({ mensaje: 'Registro no encontrado' });
            }
            res.status(200).json({ mensaje: 'Registro eliminado correctamente' });
        } catch (err) {
            res.status(500).json({ mensaje: err.message });
        }
    }
}

module.exports = RegistroAccesoController;
