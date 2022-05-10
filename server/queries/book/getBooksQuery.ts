import connection from '../../database/connection';

const getBooksQuery = () => connection.query('SELECT * FROM appoinments');
export default getBooksQuery;
