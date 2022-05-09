import connection from '../../database/connection';

const checkEmailExistsQuery = (
  email: String,
) => {
  const sql = {
    text: 'select id from users where email = $1',
    values: [email],
  };
  return connection.query(sql);
};
export default checkEmailExistsQuery;
