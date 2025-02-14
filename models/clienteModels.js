const pool = require('../config/db');

class Cliente {
    static async findAll() {
        const result = await pool.query('SELECT * FROM cliente');
        return result.rows;
    }

    static async create(data) {
        const { razon_social, domicilio, rfc, telefono, email } = data;
        const result = await pool.query(
            `INSERT INTO cliente (razon_social, domicilio, rfc, telefono, email) 
             VALUES ($1, $2, $3, $4, $5) RETURNING *`,
            [razon_social, domicilio, rfc, telefono, email]
        );
        return result.rows[0];
    }

    static async findById(id) {
        const result = await pool.query('SELECT * FROM cliente WHERE id_cliente = $1', [id]);
        return result.rows[0];
    }

    static async update(id, data) {
        const { razon_social, domicilio, rfc, telefono, email } = data;
        const result = await pool.query(
            `UPDATE cliente 
            SET razon_social = $1, domicilio = $2, rfc = $3, telefono = $4, email = $5 
            WHERE id_cliente = $6 RETURNING *`,
            [razon_social, domicilio, rfc, telefono, email, id]
        );
        return result.rows[0];
    }

    static async delete(id) {
        const result = await pool.query('DELETE FROM cliente WHERE id_cliente = $1', [id]);
        return result.rowCount;
    }
}

module.exports = Cliente;
