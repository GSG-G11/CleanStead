import { RequestHandler } from 'express';
import { deleteContactQuery } from '../../queries';
import CustomizedError from '../../utils/error';

const deleteContact: RequestHandler = async (req, res, next) => {
  const { id: contactId } = req.params;
  try {
    const { rows, rowCount } = await deleteContactQuery(contactId as any);
    if (!rowCount) {
      throw new CustomizedError(400, 'There have error try again later');
    }
    return res.json({ message: 'Successfully delete contact', status: 200, data: rows[0] });
  } catch (error:any) {
    if (error.errors) {
      return next(new CustomizedError(400, error.errors[0]));
    }
    return next(error);
  }
};

export default deleteContact;
