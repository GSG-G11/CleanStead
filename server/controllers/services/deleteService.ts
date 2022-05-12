import { RequestHandler } from 'express';
import { deleteServiceQuery } from '../../queries';
import { idSchema } from '../../validation';
import { CustomizedError } from '../../utils';

const deleteService: RequestHandler = async (req, res, next) => {
  const { id } = req.params;

  try {
    await idSchema.validate({ id }, { abortEarly: false });
    const { rowCount } = await deleteServiceQuery(id as any);
    if (!rowCount) {
      return res.status(404).json({
        message: 'There is no service with this Id',
      });
    }
    return res.json({ message: 'Service Deleted Successfuly!', status: 200 });
  } catch (error:any) {
    if (error.errors) {
      return next(new CustomizedError(400, error.errors[0]));
    }
    return next(error);
  }
};

export default deleteService;
