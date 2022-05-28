import { RequestHandler } from 'express';

const logout: RequestHandler = async (req, res) => {
  res.clearCookie('token').json({ message: 'You have been successfully logged out', status: 200 });
};

export default logout;
