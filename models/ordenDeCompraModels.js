const pool = require('../config/db');

class OrdenDeCompra {
    static async findAll() {
        const result = await pool.query('SELECT * FROM orden_de_compra');
        return result.rows;
    }

    static async create(data) {
        const { fecha_creacion, descripcion, cantidad, precio_compra, usuarioid_usuario2, proveedorid_proveedor } = data;
        const result = await pool.query(
            `INSERT INTO orden_de_compra (fecha_creacion, descripcion, cantidad, precio_compra, usuarioid_usuario2, proveedorid_proveedor) 
             VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
            [fecha_creacion, descripcion, cantidad, precio_compra, usuarioid_usuario2, proveedorid_proveedor]
        );
        return result.rows[0];
    }

    static async findById(id) {
        const result = await pool.query('SELECT * FROM orden_de_compra WHERE id_orden = $1', [id]);
        return result.rows[0];
    }

    static async update(id, data) {
        const { fecha_creacion, descripcion, cantidad, precio_compra, usuarioid_usuario2, proveedorid_proveedor } = data;
        const result = await pool.query(
            `UPDATE orden_de_compra 
            SET fecha_creacion = $1, descripcion = $2, cantidad = $3, precio_compra = $4, usuarioid_usuario2 = $5, proveedorid_proveedor = $6 
             WHERE id_orden = $7 RETURNING *`,
            [fecha_creacion, descripcion, cantidad, precio_compra, usuarioid_usuario2, proveedorid_proveedor, id]
        );
        return result.rows[0];
    }

    static async delete(id) {
        const result = await pool.query('DELETE FROM orden_de_compra WHERE id_orden = $1', [id]);
        return result.rowCount;
    }
}

module.exports = OrdenDeCompra;
