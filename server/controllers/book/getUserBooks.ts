import { RequestHandler } from 'express';
import { getUserBooksQuery } from '../../queries';

const getUserBooks: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { rows } = await getUserBooksQuery(+id);
    res.json({ message: 'Successfully retrieved user bookings', status: 200, data: rows });
  } catch (error) {
    next(error);
  }
};

export default getUserBooks;
