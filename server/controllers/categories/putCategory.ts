import { RequestHandler } from 'express';
import { putCategoriesQuery } from '../../queries';
import { servicesSchema } from '../../validation';
import CustomizedError from '../../utils/error';

const puttService: RequestHandler = async (req, res, next) => {
  const { id } = req.params;
  try {
    const {
      name, description, image,
    } = await servicesSchema.validate(req.body, { abortEarly: false });
    const { rows, rowCount } = await putCategoriesQuery(
      id as any,
      name,
      description,
      image,
    );
    if (!rowCount) {
      throw new CustomizedError(400, 'يوجد خلل حاول مرة أخرى');
    }
    return res.status(201).json({ message: 'تم تعديل الخدمة بنجاح', status: 201, data: rows[0] });
  } catch (error:any) {
    if (error.errors) {
      return next(new CustomizedError(400, error.errors[0]));
    }
    return next(error);
  }
};

export default puttService;
