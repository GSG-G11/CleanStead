import { RequestHandler } from 'express';
import dotenv from 'dotenv';
import { jwtVerify, CustomizedError } from '../../../utils';

dotenv.config();

const checkAdmin: RequestHandler = async (req: any, res, next) => {
  const { token } = req.cookies;
  try {
    if (!token) throw new CustomizedError(401, 'Not Admin');
    const decoded = await jwtVerify(token);
    req.user = decoded;
    if (req.user.role === 'admin') {
      next();
    } else {
      next(new CustomizedError(401, 'Not Admin'));
    }
  } catch (err) {
    next(new CustomizedError(401, 'Not Admin'));
  }
};

export default checkAdmin;
