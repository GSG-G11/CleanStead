import connection from '../../database/connection';

const updateBookQuery = (id:number) => connection.query(`
            UPDATE appointments
            SET
              archived=true
            WHERE id=$1
            RETURNING *`, [id]);

export default updateBookQuery;
