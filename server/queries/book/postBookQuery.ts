import connection from '../../database/connection';

const postBookQuery = (
  dateTime: String,
  price: number,
  repeat: string,
  user: any,
  userId: number,
) => {
  const sql = {
    text: `
          INSERT INTO
            appointments(date_time, price, repeat, name, phone, location, lat, lng, user_id)
          VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
            RETURNING id;
          `,
    values: [dateTime, price, repeat, user.name, user.phone, user.location, user.lat, user.lng, userId],
  };
  return connection.query(sql);
};

const postServiceBookQuery = (
  quantity: number,
  appointmentId: number,
  serviceId: number,
) => {
  const sql = {
    text: `
          INSERT INTO
            services_appointments(quantity, appointment_id, service_id)
          VALUES ($1,$2,$3);
          `,
    values: [quantity, appointmentId, serviceId],
  };
  return connection.query(sql);
};
export { postBookQuery, postServiceBookQuery };
