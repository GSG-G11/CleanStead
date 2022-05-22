import { RequestHandler } from 'express';
import { deleteBookQuery } from '../../queries';
import { CustomizedError } from '../../utils';

const deleteBook: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { rows, rowCount } = await deleteBookQuery(+id);

    if (!rowCount) {
      throw new CustomizedError(400, 'لا يوجد حجز بهذا الرقم');
    }

    res.json({ message: 'تم حذف الحجز بنجاح', status: 200, data: rows });
  } catch (error:any) {
    if (error.errors) {
      return next(new CustomizedError(400, error.errors[0]));
    }
    return next(error);
  }
};

export default deleteBook;
