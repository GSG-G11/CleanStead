import { RequestHandler } from 'express';
import { putCategoriesQuery } from '../../queries';
import { categoriesSchema } from '../../validation';
import CustomizedError from '../../utils/error';

const putCategories: RequestHandler = async (req, res, next) => {
  const { id: categoryId } = req.params;
  try {
    const {
      name, description, image,
    } = await categoriesSchema.validate(req.body, { abortEarly: false });
    const { rows, rowCount } = await putCategoriesQuery(
      categoryId as any,
      name,
      description,
      image,
    );
    if (!rowCount) {
      throw new CustomizedError(400, 'There have error try again later');
    }
    return res.json({ message: 'Successfully update category', status: 200, data: rows[0] });
  } catch (error:any) {
    if (error.errors) {
      return next(new CustomizedError(400, error.errors[0]));
    }
    return next(error);
  }
};

export default putCategories;
