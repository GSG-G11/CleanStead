import { RequestHandler } from 'express';
import { archivedServiceQuery } from '../../queries';
import CustomizedError from '../../utils/error';

const archivedService: RequestHandler = async (req, res, next) => {
  const { id } = req.params;

  try {
    const { rowCount } = await archivedServiceQuery(
      id as any,
    );
    if (!rowCount) {
      throw new CustomizedError(400, ' There is no Service with this Id');
    }

    return res.json({ message: 'Service archived successfully!', status: 200 });
  } catch (error: any) {
    if (error.errors) {
      return next(new CustomizedError(400, error.errors[0]));
    }
    return next(error);
  }
};

export default archivedService;
