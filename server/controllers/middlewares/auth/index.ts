import { RequestHandler } from 'express';
import dotenv from 'dotenv';
import { verify } from 'jsonwebtoken';

dotenv.config();

const checkAuth: RequestHandler = async (req, res, next) => {
  const { token } = req.cookies;
  if (!token) return res.status(401).json('UnAuthraised');
  await verify(token, process.env.JWT_SECRET as string, (err:any, decoded:any):any => {
    if (err) {
      return res.status(403).send(err);
    }
    req.body.user = decoded;
    next();
  });
};

export default checkAuth;
