import connection from '../../database/connection';

const addUserQuery = (
  name: String,
  email: String,
  phone: String,
  password: String,
  location: String,
) => {
  const sql = {
    text: 'INSERT INTO users(name, email, phone, password, location) VALUES ($1,$2,$3,$4,$5) RETURNING *',
    values: [name, email, phone, password, location],
  };
  return connection.query(sql);
};
export default addUserQuery;
