import connection from '../../database/connection';

const getCategoriesQuery = () => connection.query('SELECT * FROM categories');
export default getCategoriesQuery;
