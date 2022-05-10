import { RequestHandler } from 'express';
import dotenv from 'dotenv';
import { jwtVerify } from '../../../utils/jwt';

dotenv.config();

const checkAuth: RequestHandler = async (req: any, res, next) => {
  const { token } = req.cookies;
  if (!token) return res.status(401).json('UnAuthraised');
  const decoded = await jwtVerify(token);
  req.user = decoded;
  next();
};

export default checkAuth;
