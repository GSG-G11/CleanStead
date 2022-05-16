import connection from '../../database/connection';

const getUserBooksQuery = (id:number) => connection.query(`
  SELECT
    a.id,
    a.date_time,
    a.price,
    a.status,
    a.repeat,
    a.user_id,
    u.name,
    u.location
  FROM
    appoinments AS a
  JOIN  users AS u ON  a.user_id = u.id
  WHERE a.user_id = $1`, [id]);
export default getUserBooksQuery;
