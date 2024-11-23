const Almacen = require('../models/almacenModels');

class AlmacenController {
    
    static async getAllAlmacenes(req, res) {
        try {
            const almacenes = await Almacen.findAll();
            res.json(almacenes);
        } catch (error) {
            res.status(500).json({ mensaje: error.message });
        }
    }

    static async createAlmacen(req, res) {
        try {
            const almacen = await Almacen.create(req.body);
            res.status(201).json(almacen);
        } catch (error) {
            res.status(500).json({ mensaje: error.message });
        }
    }

    static async getAlmacenById(req, res) {
        try {
            const almacen = await Almacen.findById(req.params.id);
            if(!almacen) {
                return res.status(404).json({ mensaje: "Almacén no encontrado" });
            }
            res.json(almacen);
        } catch (error) {
            res.status(500).json({ mensaje: error.message });
        }
    }

    static async updateAlmacen(req, res) {
        try {
            const almacen = await Almacen.update(req.params.id, req.body);
            if(!almacen) {
                return res.status(404).json({ mensaje: "Almacén no encontrado" });
            }
            res.json(almacen);
        } catch (error) {
            res.status(500).json({ mensaje: error.message });
        }
    }

    static async deleteAlmacen(req, res) {
        const almacenId = req.params.id;
        try {
            const result = await Almacen.delete(almacenId);
            if (result === 0) {
                return res.status(404).json({ mensaje: 'Almacén no encontrado' });
            }
            res.status(200).json({ mensaje: 'Almacén eliminado correctamente' });
        } catch (error) {
            res.status(500).json({ mensaje: error.message });
        }
    }
}

module.exports = AlmacenController;
