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
            const { razon_social, domicilio, rfc, telefono1, email } = req.body;
            
            if (!razon_social || !domicilio || !rfc || !telefono1 || !email) {
                return res.status(400).json({ mensaje: "Todos los campos son obligatorios" });
            }

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
            const { razon_social, domicilio, rfc, telefono1, email } = req.body;

            if (!razon_social || !domicilio || !rfc || !telefono1 || !email) {
                return res.status(400).json({ mensaje: "Todos los campos son obligatorios" });
            }

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
        try {
            const result = await Proveedor.delete(req.params.id);
            if (result === 0) {
                return res.status(404).json({ mensaje: 'Proveedor no encontrado' });
            }
            res.status(200).json({ mensaje: 'Proveedor eliminado correctamente' });
        } catch (error) {
            res.status(500).json({ mensaje: error.message });
        }
    }
}

module.exports = ProveedorController;

