import connection from '../../database/connection';

const updateContactStatusQuery = (contactId:number) => {
  const sql = {
    text: `UPDATE
            contacts
          SET status = 'done'
          WHERE id = $1 RETURNING *;`,
    values: [contactId],
  };
  return connection.query(sql);
};
export default updateContactStatusQuery;
