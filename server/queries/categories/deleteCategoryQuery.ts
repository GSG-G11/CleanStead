import connection from '../../database/connection';

const deleteCategoryQuery = (categoryId:number) => {
  const sql = {
    text: 'INSERT INTO table2 SELECT * FROM categories WHERE id=$1;',
    values: [categoryId],
  };
  return connection.query(sql);
};
export default deleteCategoryQuery;
