import connection from '../../database/connection';

const checkEmailAdminExistsQuery = (
  email: String,
) => {
  const sql = {
    text: 'select id,password from admins where email = $1',
    values: [email],
  };
  return connection.query(sql);
};
export default checkEmailAdminExistsQuery;
