const Proveedor = require('../models/proveedorModels');

class ProveedorController {

    static async getAllProveedores(req, res) {
        try {
            const proveedores = await Proveedor.findAll();
            res.json(proveedores);
        } catch (error) {
            res.status(500).json({ mensaje: error.message });
        }
    }

    static async createProveedor(req, res) {
        try {
            const proveedor = await Proveedor.create(req.body);
            res.status(201).json(proveedor);
        } catch (error) {
            res.status(500).json({ mensaje: error.message });
        }
    }

    static async getProveedorById(req, res) {
        try {
            const proveedor = await Proveedor.findById(req.params.id);
            if (!proveedor) {
                return res.status(404).json({ mensaje: "Proveedor no encontrado" });
            }
            res.json(proveedor);
        } catch (error) {
            res.status(500).json({ mensaje: error.message });
        }
    }

    static async updateProveedor(req, res) {
        try {
            const proveedor = await Proveedor.update(req.params.id, req.body);
            if (!proveedor) {
                return res.status(404).json({ mensaje: "Proveedor no encontrado" });
            }
            res.json(proveedor);
        } catch (error) {
            res.status(500).json({ mensaje: error.message });
        }
    }

    static async deleteProveedor(req, res) {
        const proveedorId = req.params.id;
        try {
            const result = await Proveedor.delete(proveedorId);
            if (result === 0) {
                return res.status(404).json({ mensaje: 'Proveedor no encontrado' });
            }
            res.status(200).json({ mensaje: 'Proveedor eliminado correctamente' });
        } catch (err) {
            res.status(500).json({ mensaje: err.message });
        }
    }
}

module.exports = ProveedorController;
