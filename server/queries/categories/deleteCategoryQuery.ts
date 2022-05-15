import connection from '../../database/connection';

const deleteCategoryQuery = (categoryId:number) => {
  const sql = {
    text: 'DELETE FROM category WHERE id=$1;',
    values: [categoryId],
  };
  return connection.query(sql);
};
export default deleteCategoryQuery;
