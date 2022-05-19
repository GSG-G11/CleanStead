import connection from '../../database/connection';

const getStatusQuery = () => connection.query(`
  SELECT
  (SELECT count(id) FROM appoinments)as allTotal,count(status) as total, status
  FROM
    appoinments group by status`);
export default getStatusQuery;
