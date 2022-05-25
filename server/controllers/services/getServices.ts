import { RequestHandler } from 'express';
import { getServicesQuery } from '../../queries';

const getServices: RequestHandler = async (req, res, next) => {
  try {
    const { rows } = await getServicesQuery();
    res.json({ message: 'Successfully retrieved services', status: 200, data: rows });
  } catch (error) {
    next(error);
  }
};

export default getServices;
