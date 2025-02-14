const pool = require('../config/db');

class Producto {
    static async findAll() {
        const result = await pool.query('SELECT * FROM productos');
        return result.rows;
    }

    static async create(data) {
        const { existencia, nombre_producto, precio_venta, proveedorid_proveedor } = data;
        const result = await pool.query(
            `INSERT INTO productos (existencia, nombre_producto, precio_venta, proveedorid_proveedor) 
             VALUES ($1, $2, $3, $4) RETURNING *`,
            [existencia, nombre_producto, precio_venta, proveedorid_proveedor]
        );
        return result.rows[0];
    }

    static async findById(id) {
        const result = await pool.query('SELECT * FROM productos WHERE id_producto = $1', [id]);
        return result.rows[0];
    }

    static async update(id, data) {
        const { existencia, nombre_producto, precio_venta, proveedorid_proveedor } = data;
        const result = await pool.query(
            `UPDATE productos 
            SET existencia = $1, nombre_producto = $2, precio_venta = $3, proveedorid_proveedor = $4 
             WHERE id_producto = $5 RETURNING *`,
            [existencia, nombre_producto, precio_venta, proveedorid_proveedor, id]
        );
        return result.rows[0];
    }

    static async delete(id) {
        const result = await pool.query('DELETE FROM productos WHERE id_producto = $1', [id]);
        return result.rowCount;
    }
}

module.exports = Producto;
