import connection from '../../database/connection';

const addContactQuery = (
  name: String,
  email: String,
  message: String,
  phone: string,
  categoryId: number,
) => {
  const sql = {
    text: 'INSERT INTO contacts(name, email, message, phone, category_id) VALUES ($1,$2,$3,$4,$5) RETURNING *',
    values: [name, email, message, phone, categoryId],
  };
  return connection.query(sql);
};
export default addContactQuery;
