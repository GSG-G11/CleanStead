import { Request, Response } from 'express';

const clientError = (req:Request, res:Response):any => {
  res.status(404).json({ status: 404, message: 'Page Not Found' });
};

export default clientError;
