const pool = require('../config/db');

class Cliente {
    static async findAll() {
        const result = await pool.query('SELECT * FROM cliente');
        return result.rows;
    }

    static async create(data) {
        const { nombre, apellido_paterno, apellido_materno, calle, colonia, cp, municipio, estado, rfc } = data;
        const result = await pool.query(
            `INSERT INTO cliente (nombre, apellido_paterno, apellido_materno, calle, colonia, cp, municipio, estado, rfc) 
             VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *`,
            [nombre, apellido_paterno, apellido_materno, calle, colonia, cp, municipio, estado, rfc]
        );
        return result.rows[0];
    }

    static async findById(id) {
        const result = await pool.query('SELECT * FROM cliente WHERE id_cliente = $1', [id]);
        return result.rows[0];
    }

    static async update(id, data) {
        const { nombre, apellido_paterno, apellido_materno, calle, colonia, cp, municipio, estado, rfc } = data;
        const result = await pool.query(
            `UPDATE cliente 
            SET nombre = $1, apellido_paterno = $2, apellido_materno = $3, calle = $4, colonia = $5, cp = $6, 
            municipio = $7, estado = $8, rfc = $9 
             WHERE id_cliente = $10 RETURNING *`,
            [nombre, apellido_paterno, apellido_materno, calle, colonia, cp, municipio, estado, rfc, id]
        );
        return result.rows[0];
    }

    static async delete(id) {
        const result = await pool.query('DELETE FROM cliente WHERE id_cliente = $1', [id]);
        return result.rowCount;
    }
}

module.exports = Cliente;
