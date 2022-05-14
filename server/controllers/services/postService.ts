import { RequestHandler } from 'express';
import { postServiceQuery } from '../../queries';
import { servicesSchema } from '../../validation';
import CustomizedError from '../../utils/error';

const postService: RequestHandler = async (req, res, next) => {
  try {
    const {
      name, description, price, image, categoryId,
    } = await servicesSchema.validate(req.body, { abortEarly: false });
    const { rowCount } = await postServiceQuery(name, description, price, image, categoryId);
    if (!rowCount) {
      throw new CustomizedError(400, 'يوجد خلل حاول مرة أخرى');
    }
    return res.status(201).json({ message: 'تم إضافة الخدمة بنجاح', status: 201 });
  } catch (error:any) {
    if (error.name === 'ValidationError') {
      return next(new CustomizedError(400, error.errors[0]));
    }
    return next(error);
  }
};

export default postService;
