const pool = require('../config/db');

class RegistroAcceso {
    static async findAll() {
        const result = await pool.query('SELECT * FROM registro_acceso');
        return result.rows;
    }

    static async create(data) {
        const { id_usuario, fecha_acceso, exitoso } = data;
        const result = await pool.query(
            `INSERT INTO registro_acceso (id_usuario, fecha_acceso, exitoso) 
             VALUES ($1, $2, $3) RETURNING *`,
            [id_usuario, fecha_acceso, exitoso]
        );
        return result.rows[0];
    }

    static async findById(id) {
        const result = await pool.query('SELECT * FROM registro_acceso WHERE id_acceso = $1', [id]);
        return result.rows[0];
    }

    static async update(id, data) {
        const { id_usuario, fecha_acceso, exitoso } = data;
        const result = await pool.query(
            `UPDATE registro_acceso 
            SET id_usuario = $1, fecha_acceso = $2, exitoso = $3 
             WHERE id_acceso = $4 RETURNING *`,
            [id_usuario, fecha_acceso, exitoso, id]
        );
        return result.rows[0];
    }

    static async delete(id) {
        const result = await pool.query('DELETE FROM registro_acceso WHERE id_acceso = $1', [id]);
        return result.rowCount;
    }
}

module.exports = RegistroAcceso;
