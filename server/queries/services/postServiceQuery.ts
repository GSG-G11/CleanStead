import connection from '../../database/connection';

const postServiceQuery = (
  name: String,
  description: String,
  price: number,
  image: String,
  categoryId: number,
) => {
  const sql = {
    text: 'INSERT INTO services(name, description, price, image, category_id) VALUES ($1,$2,$3,$4,$5);',
    values: [name, description, price, image, categoryId],
  };
  return connection.query(sql);
};
export default postServiceQuery;
