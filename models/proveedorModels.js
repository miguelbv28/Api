const pool = require('../config/db');

class Proveedor {
    static async findAll() {
        const result = await pool.query('SELECT * FROM proveedor');
        return result.rows;
    }

    static async create(data) {
        const { razon_social, domicilio, rfc, telefono1, email } = data;
        const result = await pool.query(
            `INSERT INTO proveedor (razon_social, domicilio, rfc, telefono1, email) 
             VALUES ($1, $2, $3, $4, $5) RETURNING *`,
            [razon_social, domicilio, rfc, telefono1, email]
        );
        return result.rows[0];
    }

    static async findById(id) {
        const result = await pool.query('SELECT * FROM proveedor WHERE id_proveedor = $1', [id]);
        return result.rows[0];
    }

    static async update(id, data) {
        const { razon_social, domicilio, rfc, telefono1, email } = data;
        const result = await pool.query(
            `UPDATE proveedor 
            SET razon_social = $1, domicilio = $2, rfc = $3, telefono1 = $4, email = $5
             WHERE id_proveedor = $6 RETURNING *`,
            [razon_social, domicilio, rfc, telefono1, email, id]
        );
        return result.rows[0];
    }

    static async delete(id) {
        const result = await pool.query('DELETE FROM proveedor WHERE id_proveedor = $1', [id]);
        return result.rowCount;
    }
}

module.exports = Proveedor;
