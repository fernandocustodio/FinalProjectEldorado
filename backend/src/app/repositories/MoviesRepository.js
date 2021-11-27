const db = require('../../database/index');

class MoviesRepository{
  async findAll(orderBy = 'ASC') {
    const direction = orderBy.toUpperCase() === 'DESC' ? 'DESC' : 'ASC';
    const rows = await db.query(`
      SELECT movies.*,  users.name AS users_name
      FROM movies
      INNER JOIN users ON users.id = movies.users_id
      ORDER BY movies.name ${direction}
    `);

    return rows;
  }

  async findById(id) {
    const [row] = await db.query(`
      SELECT movies.*,  users.name AS users_name
      FROM movies 
      LEFT JOIN users ON users.id = movies.users_id
      WHERE movies.id =$1
    `, [id]);

    return row;
  }

  async findByName(name) {
    const [row] = await db.query('SELECT * FROM movies WHERE name = $1', [name]);

    return row;
  }

  async create({
    name, poster, description, release_date, upload_date, users_id,
  }){
    const [row] = await db.query(`
      INSERT INTO movies(name, poster, description, release_date, upload_date, users_id) 
      VALUES($1, $2, $3, $4, $5, $6)
      RETURNING *
    `, [name, poster, description, release_date, upload_date, users_id]);

    return row;
  }

  async update(id, {
    name, poster, description, release_date, upload_date, users_id,
  }){
    const [row] = await db.query(`
      UPDATE movies
      SET name = $1, poster = $2, description = $3, release_date = $4, upload_date = $5, users_id = $6
      WHERE id = $7
      RETURNING *
    `, [name, poster, description, release_date, upload_date, users_id, id]);

    return row;
  }

  async delete(id){
    const deleteOp = await db.query('DELETE FROM movies WHERE id = $1', [id]);
    return deleteOp;
  }
}

module.exports = new MoviesRepository();
