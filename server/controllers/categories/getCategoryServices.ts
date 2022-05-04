import { RequestHandler } from 'express';
import { getCategoryServicesQuery } from '../../queries';
import { categroyIdSchema } from '../../validation';
import CustomizedError from '../../utils/error';

const getCategoryServices: RequestHandler = async (req, res, next) => {
  const { id } = req.params;
  const { size } = req.query;

  try {
    await categroyIdSchema.validate({ id }, { abortEarly: false });
    const { rows, rowCount } = await getCategoryServicesQuery(id as any, size as any);
    if (!rowCount) {
      return res.status(404).json({
        message: 'There is no category with this Id',
      });
    }
    return res.json({ message: 'Successfully retrieved services', status: 200, data: rows });
  } catch (error:any) {
    if (error.errors) {
      return next(new CustomizedError(400, error.errors[0]));
    }
    return next(error);
  }
};

export default getCategoryServices;
