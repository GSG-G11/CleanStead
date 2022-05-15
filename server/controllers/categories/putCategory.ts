import { RequestHandler } from 'express';
import { postCategoriesQuery } from '../../queries';
import { categoriesSchema } from '../../validation';
import CustomizedError from '../../utils/error';

const putCategories: RequestHandler = async (req, res, next) => {
  try {
    const {
      name, description, image,
    } = await categoriesSchema.validate(req.body, { abortEarly: false });
    const { rowCount } = await postCategoriesQuery(name, description, image);
    if (!rowCount) {
      throw new CustomizedError(400, 'يوجد خلل حاول مرة أخرى');
    }
    return res.status(201).json({ message: 'تم تعديل الخدمة بنجاح', status: 201 });
  } catch (error:any) {
    if (error.name === 'ValidationError') {
      return next(new CustomizedError(400, error.errors[0]));
    }
    return next(error);
  }
};

export default putCategories;
