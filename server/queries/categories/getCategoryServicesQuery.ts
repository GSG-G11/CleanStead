import connection from '../../database/connection';

const getCategoryServicesQuery = (categoryId:number, size:number) => {
  const sql = {
    text: `SELECT * 
          FROM services 
          WHERE category_id=$1 
          LIMIT $2;`,
    values: [categoryId, size],
  };
  return connection.query(sql);
};
export default getCategoryServicesQuery;
