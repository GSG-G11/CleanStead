import connection from '../../database/connection';

const updateStatusBookQuery = (
  bookId:number,
  status:string,
) => connection.query(
  `
            UPDATE appointments
            SET
            status=$2
            WHERE id=$1
            RETURNING *`,
  [bookId, status],
);

export default updateStatusBookQuery;
