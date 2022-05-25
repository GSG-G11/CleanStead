import { RequestHandler } from 'express';
import { addContactQuery } from '../../queries';
import { contactSchema } from '../../validation';
import { CustomizedError } from '../../utils';
import { socketConnected } from '../../app';

const addContact: RequestHandler = async (req, res, next) => {
  try {
    const {
      name, email, messageInfo, phone, categoryId,
    } = await contactSchema.validate(
      req.body,
      { abortEarly: false },
    );
    const { rowCount, rows } = await addContactQuery(name, email, messageInfo, phone, categoryId);
    if (!rowCount) {
      throw new CustomizedError(400, 'there have error try again later');
    }

    socketConnected.broadcast.emit('update Contact', rows);

    return res.status(201).json({ message: 'Successfully added contact', status: 201 });
  } catch (error:any) {
    if (error.name === 'ValidationError') {
      return next(new CustomizedError(400, error.errors[0]));
    }
    return next(error);
  }
};

export default addContact;
