import { RequestHandler } from 'express';
import dotenv from 'dotenv';
import { jwtVerify, CustomizedError } from '../../../utils';

dotenv.config();

const checkAuth: RequestHandler = async (req: any, res, next) => {
  const { token } = req.cookies;
  try {
    if (!token) throw new CustomizedError(401, 'UnAuthorized');
    const decoded = await jwtVerify(token);
    req.userInformation = decoded;
    next();
  } catch (err) {
    next(new CustomizedError(401, 'UnAuthorized'));
  }
};

export default checkAuth;
