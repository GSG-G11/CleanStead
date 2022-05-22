import connection from '../../database/connection';

const archivedCategoriesQuery = (categoryId:number) => {
  const sql = {
    text: 'UPDATE categories SET archived = true WHERE id = $1 ;',
    values: [categoryId],
  };
  return connection.query(sql);
};
export default archivedCategoriesQuery;
