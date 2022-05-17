import connection from '../../database/connection';

const postBookQuery = (
  dateTime: String,
  price: number,
  repeat: string,
  userId: number,
  quantity: number,
  serviceId: number,
) => {
  const sql = {
    text: `
    WITH ins1 AS (
      INSERT INTO appoinments(date_time,price,repeat,user_id) 
      VALUES($1, $2, $3, $4)
      ON CONFLICT DO NOTHING
      RETURNING id AS appoinment_id
       )
       INSERT INTO services_appoinments(quantity, appoinment_id, service_id)
       SELECT $5, appoinment_id, $6 FROM ins1`,
    values: [dateTime, price, repeat, userId, quantity, serviceId],
  };
  return connection.query(sql);
};
export default postBookQuery;
