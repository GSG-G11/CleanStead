import connection from '../../database/connection';

const putCategoriesQuery = (
  categoryId: number,
  name: String,
  description: String,
  image: String,
) => {
  const sql = {
    text: 'UPDATE categories SET (name, description, image) = ($2, $3, $4) WHERE id=$1 RETURNING *;',
    values: [categoryId, name, description, image],
  };
  return connection.query(sql);
};
export default putCategoriesQuery;
