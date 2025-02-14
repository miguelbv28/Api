const pool = require('../config/db');

class OrdenDeCompraProducto {
    static async findAll() {
        const result = await pool.query('SELECT * FROM orden_de_compra_productos');
        return result.rows;
    }

    static async create(data) {
        const { orden_de_compraid_orden, productosid_producto, cantidad_solicitada, cantidad_recibida, estado_producto, subtotal_producto, precio_compra } = data;
        const result = await pool.query(
            `INSERT INTO orden_de_compra_productos 
            (orden_de_compraid_orden, productosid_producto, cantidad_solicitada, cantidad_recibida, estado_producto, subtotal_producto, precio_compra) 
             VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`,
            [orden_de_compraid_orden, productosid_producto, cantidad_solicitada, cantidad_recibida, estado_producto, subtotal_producto, precio_compra]
        );
        return result.rows[0];
    }

    static async findById(ordenId, productoId) {
        const result = await pool.query(
            `SELECT * FROM orden_de_compra_productos WHERE orden_de_compraid_orden = $1 AND productosid_producto = $2`,
            [ordenId, productoId]
        );
        return result.rows[0];
    }

    static async update(ordenId, productoId, data) {
        const { cantidad_solicitada, cantidad_recibida, estado_producto, subtotal_producto, precio_compra } = data;
        const result = await pool.query(
            `UPDATE orden_de_compra_productos 
            SET cantidad_solicitada = $1, cantidad_recibida = $2, estado_producto = $3, subtotal_producto = $4, precio_compra = $5 
             WHERE orden_de_compraid_orden = $6 AND productosid_producto = $7 RETURNING *`,
            [cantidad_solicitada, cantidad_recibida, estado_producto, subtotal_producto, precio_compra, ordenId, productoId]
        );
        return result.rows[0];
    }

    static async delete(ordenId, productoId) {
        const result = await pool.query(
            `DELETE FROM orden_de_compra_productos WHERE orden_de_compraid_orden = $1 AND productosid_producto = $2`,
            [ordenId, productoId]
        );
        return result.rowCount;
    }
}

module.exports = OrdenDeCompraProducto;
