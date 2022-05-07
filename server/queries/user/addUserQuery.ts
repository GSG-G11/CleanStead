import connection from '../../database/connection';

const addUserQuery = (
  name: String,
  email: String,
  phone: number,
  password: String,
) => {
  const sql = {
    text: 'INSERT INTO users(name, email, phone, password) VALUES ($1,$2,$3,$4) RETURNING *',
    values: [name, email, phone, password],
  };
  return connection.query(sql);
};
export default addUserQuery;
