import connection from '../../database/connection';

const postCategoriesQuery = (
  name: String,
  description: String,
  image: String,
) => {
  const sql = {
    text: 'INSERT INTO categories(name, description, image) VALUES ($1,$2,$3);',
    values: [name, description, image],
  };
  return connection.query(sql);
};
export default postCategoriesQuery;
