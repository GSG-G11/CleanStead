import { RequestHandler } from 'express';
import { updateStatusBookQuery } from '../../queries';
import { bookStatusSchema } from '../../validation';
import { CustomizedError } from '../../utils';

const updateStatusBook: RequestHandler = async (req, res, next) => {
  try {
    const { id: bookId } = req.params;

    const {
      status,
    } = await bookStatusSchema.validate({ ...req.body }, { abortEarly: false });
    const { rows, rowCount } = await updateStatusBookQuery(
      bookId as any,
      status,
    );

    if (!rowCount) {
      throw new CustomizedError(404, 'Book not found');
    }

    res.json({ message: 'Book found', status: 200, data: rows });
  } catch (error:any) {
    if (error.errors) {
      return next(new CustomizedError(400, error.errors[0]));
    }
    return next(error);
  }
};

export default updateStatusBook;
