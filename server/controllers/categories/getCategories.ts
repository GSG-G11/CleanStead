import { RequestHandler } from 'express';
import { getCategoriesQuery } from '../../queries';

const getCategories: RequestHandler = async (req, res, next) => {
  try {
    const { rows } = await getCategoriesQuery();
    res.json({ message: 'Successfully retrieved all categories', status: 200, data: rows });
  } catch (error) {
    next(error);
  }
};

export default getCategories;
