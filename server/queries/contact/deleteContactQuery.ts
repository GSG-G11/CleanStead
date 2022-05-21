import connection from '../../database/connection';

const deleteContactQuery = (contactId:number) => {
  const sql = {
    text: 'UPDATE contacts SET archived = TRUE WHERE id = $1 RETURNING *;',
    values: [contactId],
  };
  return connection.query(sql);
};
export default deleteContactQuery;
