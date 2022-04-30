import { RequestHandler } from 'express';
import { getCategoryServicesQuery } from '../../queries';

const getCategoryServices: RequestHandler = async (req, res, next) => {
  const { id } = req.params;

  try {
    const { rows } = await getCategoryServicesQuery(id as any);
    res.json({ message: 'Successfully retrieved services', status: 200, data: rows });
  } catch (error) {
    next(error);
  }
};

export default getCategoryServices;
