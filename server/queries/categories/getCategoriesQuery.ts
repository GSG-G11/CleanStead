import connection from '../../database/connection';

const getCategoriesQuery = () => connection.query('SELECT * FROM categories WHERE archived = false ORDER BY id DESC');
export default getCategoriesQuery;
