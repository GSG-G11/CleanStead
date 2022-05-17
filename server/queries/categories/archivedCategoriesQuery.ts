import connection from '../../database/connection';

const archivedCategoriesQuery = (categoryId:number) => {
  const sql = {
    text: 'UPDATE categories SET archived = TRUE WHERE id = $1 RETURNING *;',
    values: [categoryId],
  };
  return connection.query(sql);
};
export default archivedCategoriesQuery;
