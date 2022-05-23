import connection from '../../database/connection';

const getContactsQuery = () => connection.query('SELECT * FROM contacts WHERE archived=FALSE');
export default getContactsQuery;
