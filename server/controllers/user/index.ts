import { Request, Response, NextFunction } from 'express';
import { getUserInfoQuery } from '../../queries';

interface IGetUserAuthInfoRequest extends Request {
  user: any
}

const getUserInfo = async (req: IGetUserAuthInfoRequest, res: Response, next: NextFunction) => {
  const { id } = req.user;
  try {
    const { rows } = await getUserInfoQuery(id as number);
    res.json({ message: 'Successfully Get User Information', status: 200, data: rows[0] });
  } catch (error) {
    next(error);
  }
};

export default getUserInfo;
