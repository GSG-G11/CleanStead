import connection from '../../database/connection';

const checkEmailExistsQuery = (
  email: String,
) => {
  const sql = {
    text: 'select id, password, name, phone, location,lat,lng from users where email = $1',
    values: [email],
  };
  return connection.query(sql);
};
export default checkEmailExistsQuery;
