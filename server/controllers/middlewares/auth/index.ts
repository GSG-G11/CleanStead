import { RequestHandler } from 'express';
import dotenv from 'dotenv';
import { jwtVerify } from '../../../utils/jwt';
import CustomizedError from '../../../utils/error';

dotenv.config();

const checkAuth: RequestHandler = async (req: any, res, next) => {
  const { token } = req.cookies;
  try {
    if (!token) throw new CustomizedError(401, 'UnAuthorized');
    const decoded = await jwtVerify(token);
    req.user = decoded;
    next();
  } catch (err) {
    next(err);
  }
};

export default checkAuth;
