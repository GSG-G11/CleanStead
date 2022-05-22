import { RequestHandler } from 'express';
import { getStatusQuery } from '../../queries';

const getStatus: RequestHandler = async (req, res, next) => {
  try {
    const { rows } = await getStatusQuery();
    res.json({ message: 'Successfully retrieved all Status', status: 200, data: rows });
  } catch (error) {
    next(error);
  }
};

export default getStatus;
