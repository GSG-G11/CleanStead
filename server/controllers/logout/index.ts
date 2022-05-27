import { RequestHandler } from 'express';

const logout: RequestHandler = async (req, res, next) => {
  res.clearCookie('token').json({ message: 'You have been successfully logged out', status: 200 });
};
const logoutAdmin: RequestHandler = async (req, res, next) => {
  res.clearCookie('tokenAdmin').json({ message: 'You have been successfully logged out', status: 200 });
};

export { logout, logoutAdmin };
