import connection from '../../database/connection';

const deleteCategoryQuery = (categoryId:number) => {
  const sql = {
    text: 'DELETE FROM categories WHERE id=$1;',
    values: [categoryId],
  };
  return connection.query(sql);
};
export default deleteCategoryQuery;
