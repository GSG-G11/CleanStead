import connection from '../../database/connection';

const getBookDayQuery = () => connection.query(`SELECT EXTRACT(HOUR FROM
    date_time) AS hour
FROM appointments
WHERE date_trunc('day', date_time) = date_trunc('day', current_timestamp)
ORDER BY hour`);

export default getBookDayQuery;
