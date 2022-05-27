import connection from '../../database/connection';

const getBookMonthQuery = () => connection.query(`
    select creation_time,((SELECT EXTRACT(DAY FROM creation_time))) AS day
    FROM appointments
    WHERE creation_time >= date_trunc('month', current_timestamp)
    AND creation_time < date_trunc('month', current_timestamp) + interval '1 month'
    ORDER BY day`);
export default getBookMonthQuery;
