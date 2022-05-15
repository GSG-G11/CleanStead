import { RequestHandler } from 'express';
import { getBookQuery } from '../../queries';

const getBook: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { rows } = await getBookQuery(+id);
    res.json({ message: 'Successfully retrieved appointment data', status: 200, data: rows });
  } catch (error) {
    next(error);
  }
};

export default getBook;
