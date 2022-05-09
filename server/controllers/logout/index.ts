import { RequestHandler } from 'express';

const logout: RequestHandler = async (req, res, next) => {
  res.clearCookie('token').json({ message: 'تم تسجيل خروجك بنجاح', status: 200 });
};

export default logout;
