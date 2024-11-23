const pool = require('../config/db');

class Almacen {
    static async findAll() {
        const result = await pool.query('SELECT * FROM almacen');
        return result.rows;
    }

    static async create(data) {
        const { calle, colonia, municipio, codigo_postal, nombre_almacen, estado } = data;
        const result = await pool.query(
            `INSERT INTO almacen (calle, colonia, municipio, codigo_postal, nombre_almacen, estado) 
             VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
            [calle, colonia, municipio, codigo_postal, nombre_almacen, estado]
        );
        return result.rows[0];
    }

    static async findById(id) {
        const result = await pool.query('SELECT * FROM almacen WHERE id_almacen = $1', [id]);
        return result.rows[0];
    }

    static async update(id, data) {
        const { calle, colonia, municipio, codigo_postal, nombre_almacen, estado } = data;
        const result = await pool.query(
            `UPDATE almacen SET calle = $1, colonia = $2, municipio = $3, 
             codigo_postal = $4, nombre_almacen = $5, estado = $6 WHERE id_almacen = $7 RETURNING *`,
            [calle, colonia, municipio, codigo_postal, nombre_almacen, estado, id]
        );
        return result.rows[0];
    }

    static async delete(id) {
        const result = await pool.query('DELETE FROM almacen WHERE id_almacen = $1', [id]);
        return result.rowCount;
    }
}

module.exports = Almacen;
