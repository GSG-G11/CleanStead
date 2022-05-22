import connection from '../../database/connection';

const getStatusQuery = () => connection.query(`
  SELECT
  (SELECT count(id) FROM appointments)As allTotal,count(status) as total, status
  FROM
  appointments GROUP BY status`);
export default getStatusQuery;
