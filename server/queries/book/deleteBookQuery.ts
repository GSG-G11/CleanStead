import connection from '../../database/connection';

const deleteBookQuery = (id:number) => connection.query(`
            UPDATE appointments
            SET
              archived=true
            WHERE id=$1
            RETURNING *`, [id]);

export default deleteBookQuery;
