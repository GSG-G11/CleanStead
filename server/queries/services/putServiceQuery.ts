import connection from '../../database/connection';

const putServiceQuery = (
  serviceId: number,
  name: String,
  description: String,
  price: number,
  image: String,
  categoryId: number,
) => {
  const sql = {
    text: `UPDATE services
            SET
              name=$2,
              description=$3,
              price=$4,
              image=$5,
              category_id=$6
              WHERE id=$1
              RETURNING *;`,
    values: [serviceId, name, description, price, image, categoryId],
  };
  return connection.query(sql);
};
export default putServiceQuery;
