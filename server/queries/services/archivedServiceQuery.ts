import connection from '../../database/connection';

const archivedServiceQuery = (serviceId:number) => {
  const sql = {
    text: 'UPDATE services SET archived = TRUE WHERE id = $1 RETURNING *;',
    values: [serviceId],
  };
  return connection.query(sql);
};
export default archivedServiceQuery;
