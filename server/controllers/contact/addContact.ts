import { RequestHandler } from 'express';
import { addContactQuery } from '../../queries';
import { contactSchema } from '../../validation';
import { CustomizedError } from '../../utils';

const addContact: RequestHandler = async (req, res, next) => {
  try {
    const {
      name, email, messageInfo, phone, categoryId,
    } = await contactSchema.validate(
      req.body,
      { abortEarly: false },
    );
    const { rowCount } = await addContactQuery(name, email, messageInfo, phone, categoryId);
    if (!rowCount) {
      throw new CustomizedError(400, 'يوجد خلل حاول مرة أخرى');
    }
    return res.status(201).json({ message: 'تمت إضافة طلبك سوف يتم التواصل معك قريبا', status: 201 });
  } catch (error:any) {
    if (error.name === 'ValidationError') {
      return next(new CustomizedError(400, error.errors[0]));
    }
    return next(error);
  }
};

export default addContact;
