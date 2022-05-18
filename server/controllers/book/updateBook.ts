import { RequestHandler } from 'express';
import { updateBookQuery } from '../../queries';
import { bookSchema } from '../../validation';
import { CustomizedError } from '../../utils';

const updateBook: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    const {
      dateTime, price, status, repeat,
    } = await bookSchema.validate(req.body, { abortEarly: false });
    const { rows, rowCount } = await updateBookQuery(+id);

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

export default updateBook;
