import { RequestHandler } from 'express';
import { deleteCategoryQuery } from '../../queries';
import CustomizedError from '../../utils/error';

const deleteCategory: RequestHandler = async (req, res, next) => {
  const { id } = req.params;
  console.log(id);

  try {
    const { rowCount } = await deleteCategoryQuery(
      id as any,
    );
    console.log(rowCount);
    if (!rowCount) {
      throw new CustomizedError(400, ' There is no category with this Id');
    }

    return res.json({ message: 'category archived Successfully!', status: 200 });
  } catch (error: any) {
    if (error.errors) {
      return next(new CustomizedError(400, error.errors[0]));
    }
    console.log(error);
    return next(error);
  }
};

export default deleteCategory;
