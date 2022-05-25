import { RequestHandler } from 'express';
import { updateBookQuery } from '../../queries';
import { updateBookSchema } from '../../validation';
import { CustomizedError } from '../../utils';

const updateBook: RequestHandler = async (req, res, next) => {
  try {
    const { id: bookId } = req.params;

    const {
      dateTime, repeat, user,
    } = await updateBookSchema.validate({ ...req.body }, { abortEarly: false });
    const { rows, rowCount } = await updateBookQuery(
      bookId as any,
      dateTime,
      repeat,
      user,
    );

    if (!rowCount) {
      throw new CustomizedError(404, 'لا يوجد حجز بهذا الرقم');
    }

    res.json({ message: 'تم تعديل الحجز بنجاح', status: 200, data: rows });
  } catch (error:any) {
    if (error.errors) {
      return next(new CustomizedError(400, error.errors[0]));
    }
    return next(error);
  }
};

export default updateBook;
