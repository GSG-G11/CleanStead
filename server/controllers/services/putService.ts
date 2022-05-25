import { RequestHandler } from 'express';
import { putServiceQuery } from '../../queries';
import { servicesSchema } from '../../validation';
import CustomizedError from '../../utils/error';

const putService: RequestHandler = async (req, res, next) => {
  const { id: serviceId } = req.params;
  try {
    const {
      name, description, price, image, categoryId,
    } = await servicesSchema.validate(req.body, { abortEarly: false });
    const { rows, rowCount } = await putServiceQuery(
      serviceId as any,
      name,
      description,
      price,
      image,
      categoryId,
    );
    if (!rowCount) {
      throw new CustomizedError(400, 'there have error try again later');
    }
    return res.json({ message: 'Successfully edited service', status: 200, data: rows[0] });
  } catch (error:any) {
    if (error.errors) {
      return next(new CustomizedError(400, error.errors[0]));
    }
    return next(error);
  }
};

export default putService;
