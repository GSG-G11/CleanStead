import { RequestHandler } from 'express';
import { deleteCategoryQuery } from '../../queries';
import CustomizedError from '../../utils/error';

const deleteCategory: RequestHandler = async (req, res, next) => {
  const { id } = req.params;

  try {
    const { rowCount } = await deleteCategoryQuery(
      id as any,
    );
    if (!rowCount) {
      throw new CustomizedError(400, ' There is no category with this Id');
    }

    return res.json({ message: 'category archived Successfully!', status: 200 });
  } catch (error: any) {
    if (error.errors) {
      return next(new CustomizedError(400, error.errors[0]));
    }
    return next(error);
  }
};

export default deleteCategory;
