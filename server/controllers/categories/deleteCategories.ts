import { RequestHandler } from 'express';
import { deleteCategoryQuery } from '../../queries';
import { CustomizedError } from '../../utils';

const deleteCategory: RequestHandler = async (req, res, next) => {
  const { id } = req.params;

  try {
    const { rowCount } = await deleteCategoryQuery(id as any);
    if (!rowCount) {
      return res.status(404).json({
        message: 'There is no category with this Id',
      });
    }
    return res.json({ message: 'category Deleted Successfuly!', status: 200 });
  } catch (error:any) {
    if (error.errors) {
      return next(new CustomizedError(400, error.errors[0]));
    }
    return next(error);
  }
};

export default deleteCategory;