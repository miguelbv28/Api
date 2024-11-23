const pool = require('../config/db');

class Usuario {
    static async findAll() {
        const result = await pool.query('SELECT * FROM usuario');
        return result.rows;
    }

    static async create(data) {
        const { usuario, contraseña, nombre, apellido_paterno, apellido_materno, email, calle, colonia, cp, municipio, estado, imagen } = data;
        const result = await pool.query(
            `INSERT INTO usuario (usuario, contraseña, nombre, apellido_paterno, apellido_materno, email, calle, colonia, cp, municipio, estado, imagen) 
             VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) RETURNING *`,
            [usuario, contraseña, nombre, apellido_paterno, apellido_materno, email, calle, colonia, cp, municipio, estado, imagen]
        );
        return result.rows[0];
    }

    static async findById(id) {
        const result = await pool.query('SELECT * FROM usuario WHERE id_usuario = $1', [id]);
        return result.rows[0];
    }

    static async update(id, data) {
        const { usuario, contraseña, nombre, apellido_paterno, apellido_materno, email, calle, colonia, cp, municipio, estado, imagen } = data;
        const result = await pool.query(
            `UPDATE usuario 
            SET usuario = $1, contraseña = $2, nombre = $3, apellido_paterno = $4, apellido_materno = $5, email = $6, 
            calle = $7, colonia = $8, cp = $9, municipio = $10, estado = $11, imagen = $12 
             WHERE id_usuario = $13 RETURNING *`,
            [usuario, contraseña, nombre, apellido_paterno, apellido_materno, email, calle, colonia, cp, municipio, estado, imagen, id]
        );
        return result.rows[0];
    }

    static async delete(id) {
        const result = await pool.query('DELETE FROM usuario WHERE id_usuario = $1', [id]);
        return result.rowCount;
    }
}

module.exports = Usuario;
