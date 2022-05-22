import { RequestHandler } from 'express';

const logout: RequestHandler = async (req, res, next) => {
  res.clearCookie('token').json({ message: 'تم تسجيل خروجك بنجاح', status: 200 });
};
const logoutAdmin: RequestHandler = async (req, res, next) => {
  res.clearCookie('tokenAdmin').json({ message: 'تم تسجيل خروجك بنجاح', status: 200 });
};

export { logout, logoutAdmin };
