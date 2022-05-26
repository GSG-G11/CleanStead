import connection from '../../database/connection';

const getBooksQuery = () => connection.query(`
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
    appointments AS a
  JOIN  users AS u ON  a.user_id = u.id
  WHERE a.archived = false`);
export default getBooksQuery;
