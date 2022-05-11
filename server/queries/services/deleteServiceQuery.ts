import connection from '../../database/connection';

const deleteServiceQuery = (serviceId:number) => {
  const sql = {
    text: 'DELETE FROM services WHERE id=$1;',
    values: [serviceId],
  };
  return connection.query(sql);
};
export default deleteServiceQuery;
