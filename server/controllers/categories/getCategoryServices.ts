import { RequestHandler } from 'express';
import { getCategoryServicesQuery } from '../../queries';
import { CustomizedError } from '../../utils';

const getCategoryServices: RequestHandler = async (req, res, next) => {
  const { id } = req.params;

  try {
    const { rows, rowCount } = await getCategoryServicesQuery(id as any);
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
