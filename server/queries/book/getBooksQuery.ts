import connection from '../../database/connection';

const getBooksQuery = () => connection.query(`
  SELECT
    a.id,
    a.date,
    a.time,
    a.price,
    a.status,
    a.repeat,
    a.user_id,
    u.name,
    u.location
  FROM
    appoinments AS a
  JOIN  users AS u ON  a.user_id = u.id`);
export default getBooksQuery;
