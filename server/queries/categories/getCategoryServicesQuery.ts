import connection from '../../database/connection';

const getCategoryServicesQuery = (categoryId:number) => {
  const sql = {
    text: 'SELECT * FROM services WHERE category_id=$1;',
    values: [categoryId],
  };
  return connection.query(sql);
};
export default getCategoryServicesQuery;
