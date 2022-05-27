import { RequestHandler } from 'express';
import { deleteBookQuery } from '../../queries';
import { CustomizedError } from '../../utils';

const deleteBook: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { rows, rowCount } = await deleteBookQuery(+id);

    if (!rowCount) {
      throw new CustomizedError(400, 'There is no booking for this id');
    }

    res.json({ message: 'Successfully delete booking', status: 200, data: rows });
  } catch (error:any) {
    if (error.errors) {
      return next(new CustomizedError(400, error.errors[0]));
    }
    return next(error);
  }
};

export default deleteBook;
