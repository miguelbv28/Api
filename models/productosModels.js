const pool = require('../config/db');

class Producto {
    static async findAll() {
        const result = await pool.query('SELECT * FROM productos');
        return result.rows;
    }

    static async create(data) {
        const { cantidad, nombre_producto, precio_compra, precio_venta, id_almacen } = data;
        const result = await pool.query(
            `INSERT INTO productos (cantidad, nombre_producto, precio_compra, precio_venta, id_almacen) 
             VALUES ($1, $2, $3, $4, $5) RETURNING *`,
            [cantidad, nombre_producto, precio_compra, precio_venta, id_almacen]
        );
        return result.rows[0];
    }

    static async findById(id) {
        const result = await pool.query('SELECT * FROM productos WHERE id_producto = $1', [id]);
        return result.rows[0];
    }

    static async update(id, data) {
        const { cantidad, nombre_producto, precio_compra, precio_venta, id_almacen } = data;
        const result = await pool.query(
            `UPDATE productos 
            SET cantidad = $1, nombre_producto = $2, precio_compra = $3, precio_venta = $4, id_almacen = $5 
             WHERE id_producto = $6 RETURNING *`,
            [cantidad, nombre_producto, precio_compra, precio_venta, id_almacen, id]
        );
        return result.rows[0];
    }

    static async delete(id) {
        const result = await pool.query('DELETE FROM productos WHERE id_producto = $1', [id]);
        return result.rowCount;
    }
}

module.exports = Producto;
