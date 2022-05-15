import { RequestHandler } from 'express';
import { paramsIdSchema } from '../../validation';

const validateLink: RequestHandler = async (req, res, next) => {
  try {
    await paramsIdSchema.validate({
      params: req.params,
    });
    return next();
  } catch (err:any) {
    return res.status(400)
      .json({ type: err.name, message: err.message });
  }
};

export default validateLink;
