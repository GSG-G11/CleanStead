import { RequestHandler, NextFunction } from 'express';
import { getUserInfoQuery } from '../../queries';

const getUserInfo: RequestHandler = async (req: any, res: any, next: NextFunction) => {
  const { id } = req.userInformation;

  try {
    const { rows } = await getUserInfoQuery(id as number);
    res.json({ message: 'Successfully Get User Information', status: 200, data: rows[0] });
  } catch (error) {
    next(error);
  }
};

export default getUserInfo;
