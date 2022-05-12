import { RequestHandler } from 'express';
import { getBooksQuery } from '../../queries';

const getBooks: RequestHandler = async (req, res, next) => {
  try {
    const { rows } = await getBooksQuery();
    res.json({ message: 'Successfully retrieved all books', status: 200, data: rows });
  } catch (error) {
    next(error);
  }
};

export default getBooks;
