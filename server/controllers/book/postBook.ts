import { RequestHandler } from 'express';
import { postBookQuery, postServiceBookQuery } from '../../queries';
import { bookSchema } from '../../validation';
import CustomizedError from '../../utils/error';
import { socketConnected } from '../../app';

const postBook: RequestHandler = async (req:any, res, next) => {
  try {
    const { id: userId } = req.user;

    const {
      dateTime, price, repeat, services, user,
    } = await bookSchema.validate({ ...req.body, userId }, { abortEarly: false });

    const { rows } = await postBookQuery(
      dateTime,
      price,
      repeat,
      user,
      userId,
    );

    if (!rows.length) {
      throw new CustomizedError(400, 'There have error try again later');
    }
    services.forEach(async (service) => {
      const { rowCount } = await postServiceBookQuery(
        service.quantity,
        rows[0].id,
        service.id,
      );
      if (!rowCount) {
        throw new CustomizedError(400, 'There have error try again later');
      }
    });

    socketConnected.broadcast.emit('postBook', 'added');
    return res.status(201).json({ message: 'Successfully added booking', status: 201 });
  } catch (error:any) {
    if (error.name === 'ValidationError') {
      return next(new CustomizedError(400, error.errors[0]));
    }
    return next(error);
  }
};

export default postBook;
