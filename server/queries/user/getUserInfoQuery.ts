import connection from '../../database/connection';

const getUserInfoQuery = (id: number) => {
  const sql = {
    text: 'SELECT name, email, phone, location FROM users WHERE id=$1;',
    values: [id],
  };
  return connection.query(sql);
};
export default getUserInfoQuery;
