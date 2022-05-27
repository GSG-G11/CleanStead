import connection from '../../database/connection';

const getEmailQuery = (id:number) => connection.query('SELECT email FROM users WHERE id = $1', [id]);
export default getEmailQuery;
