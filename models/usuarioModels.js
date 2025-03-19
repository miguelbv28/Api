const pool = require('../config/db');

class Usuario {
    static async findAll() {
        const result = await pool.query('SELECT * FROM usuario');
        return result.rows;
    }

    static async create(data) {
        const { usuario, contrasena, nombre, apellido_paterno, apellido_materno, email, domicilio } = data;
        const result = await pool.query(
            `INSERT INTO usuario (usuario, contrasena, nombre, apellido_paterno, apellido_materno, email, domicilio) 
             VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`,
            [usuario, contrasena, nombre, apellido_paterno, apellido_materno, email, domicilio]
        );
        return result.rows[0];
    }

    static async findById(id) {
        const result = await pool.query('SELECT * FROM usuario WHERE id_usuario = $1', [id]);
        return result.rows[0];
    }

    static async update(id, data) {
        const { usuario, contrasena, nombre, apellido_paterno, apellido_materno, email, domicilio } = data;
        const result = await pool.query(
            `UPDATE usuario 
            SET usuario = $1, contrasena = $2, nombre = $3, apellido_paterno = $4, apellido_materno = $5, 
                email = $6, domicilio = $7
             WHERE id_usuario = $8 RETURNING *`,
            [usuario, contrasena, nombre, apellido_paterno, apellido_materno, email, domicilio, id]
        );
        return result.rows[0];
    }

    static async delete(id) {
        const result = await pool.query('DELETE FROM usuario WHERE id_usuario = $1', [id]);
        return result.rowCount;
    }
    // Definición de la función findByEmail nuevo metodo
    static async findByEmail(email) {
        const result = await pool.query('SELECT email, contrasena FROM usuario WHERE email = $1', [email]);
        return result.rows[0]; // Devuelve el usuario con el correo electrónico y contraseña
    }
}

module.exports = Usuario;
