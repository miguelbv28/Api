const pool = require('../config/db');

class Proveedor {
    static async findAll() {
        const result = await pool.query('SELECT * FROM proveedor');
        return result.rows;
    }

    static async create(data) {
        const { nombre, apellidos, rfc, telefono, email, calle, colonia, cp, municipio, estado } = data;
        const result = await pool.query(
            `INSERT INTO proveedor (nombre, apellidos, rfc, telefono, email, calle, colonia, cp, municipio, estado) 
             VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *`,
            [nombre, apellidos, rfc, telefono, email, calle, colonia, cp, municipio, estado]
        );
        return result.rows[0];
    }

    static async findById(id) {
        const result = await pool.query('SELECT * FROM proveedor WHERE id_proveedor = $1', [id]);
        return result.rows[0];
    }

    static async update(id, data) {
        const { nombre, apellidos, rfc, telefono, email, calle, colonia, cp, municipio, estado } = data;
        const result = await pool.query(
            `UPDATE proveedor 
            SET nombre = $1, apellidos = $2, rfc = $3, telefono = $4, email = $5, calle = $6, colonia = $7, 
            cp = $8, municipio = $9, estado = $10 
             WHERE id_proveedor = $11 RETURNING *`,
            [nombre, apellidos, rfc, telefono, email, calle, colonia, cp, municipio, estado, id]
        );
        return result.rows[0];
    }

    static async delete(id) {
        const result = await pool.query('DELETE FROM proveedor WHERE id_proveedor = $1', [id]);
        return result.rowCount;
    }
}

module.exports = Proveedor;
