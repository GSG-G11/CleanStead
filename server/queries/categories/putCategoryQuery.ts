import connection from '../../database/connection';

const putCategoryQuery = (
  categoryId: number,
  name: String,
  description: String,
  image: String,
) => {
  const sql = {
    text: `UPDATE categories
            SET
              name=$2,
              description=$3,
              image=$4
              WHERE id=$1
              RETURNING *;`,
    values: [categoryId, name, description, image],
  };
  return connection.query(sql);
};
export default putCategoryQuery;
