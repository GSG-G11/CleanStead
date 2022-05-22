import connection from '../../database/connection';

const addUserQuery = (
  name: String,
  email: String,
  phone: String,
  password: String,
  location: String,
  lat: String,
  lng: String,
) => {
  const sql = {
    text: 'INSERT INTO users(name, email, phone, password, location,lat,lng) VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING id',
    values: [name, email, phone, password, location, lat, lng],
  };
  return connection.query(sql);
};
export default addUserQuery;
