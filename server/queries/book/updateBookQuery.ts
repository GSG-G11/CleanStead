import connection from '../../database/connection';

const updateBookQuery = (
  bookId:number,
  dateTime:string,
  repeat:string,
  user:any,
) => connection.query(
  `
            UPDATE appointments
            SET
            date_time=$2, repeat=$3, name=$4, phone=$5, location=$6, lat=$7, lng=$8
            WHERE id=$1
            RETURNING *`,
  [bookId, dateTime, repeat, user.name, user.phone, user.location, user.lat, user.lng],
);

export default updateBookQuery;
