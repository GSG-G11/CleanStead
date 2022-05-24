import connection from '../../database/connection';

const archivedServiceQuery = (serviceId:number) => {
  const sql = {
    text: 'UPDATE services SET archived = true WHERE id = $1 ;',
    values: [serviceId],
  };
  return connection.query(sql);
};
export default archivedServiceQuery;
