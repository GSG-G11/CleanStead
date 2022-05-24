import connection from '../../database/connection';

const getServicesQuery = () => connection.query(`
  SELECT
    s.id,
    s.name,
    s.image,
    s.description,
    s.price,
    s.archived,
    c.name AS category
  FROM
  services AS s
  JOIN  categories AS c ON  s.category_id = c.id WHERE s.archived = false
  ORDER BY s.id ASC`);
export default getServicesQuery;
