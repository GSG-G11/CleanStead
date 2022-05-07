import connection from '../../database/connection';

const getContactsQuery = () => connection.query('SELECT * FROM contacts');
export default getContactsQuery;
