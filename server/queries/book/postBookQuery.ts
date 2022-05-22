import connection from '../../database/connection';

const postBookQuery = (
  dateTime: String,
  price: number,
  repeat: string,
  userId: number,
) => {
  const sql = {
    text: `
          INSERT INTO
            appointments(date_time,price,repeat,user_id)
          VALUES ($1, $2, $3, $4)
            RETURNING id;
          `,
    values: [dateTime, price, repeat, userId],
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
