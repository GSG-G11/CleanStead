import connection from '../../database/connection';

const getBookMonthQuery = () => connection.query(`
select date_time,((SELECT EXTRACT(DAY FROM
          date_time))) AS day
    FROM appointments
    WHERE date_time >= date_trunc('month', current_timestamp)
    AND date_time < date_trunc('month', current_timestamp) + interval '1 month'
    ORDER BY day`);
export default getBookMonthQuery;
