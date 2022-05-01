import { RequestHandler } from 'express';
import { getCategoryServicesQuery } from '../../queries';
import { categroyIdSchema } from '../../validation';

const getCategoryServices: RequestHandler = async (req, res, next) => {
  const { id } = req.params;

  try {
    await categroyIdSchema.validate({ id }, { abortEarly: false });
    const { rows, rowCount } = await getCategoryServicesQuery(id as any);
    if (!rowCount) {
      return res.status(404).json({
        message: 'There is no category with this Id',
      });
    }
    return res.json({ message: 'Successfully retrieved services', status: 200, data: rows });
  } catch (error) {
    return next(error);
  }
};

export default getCategoryServices;
