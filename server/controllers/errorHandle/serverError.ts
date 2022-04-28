/* eslint-disable no-unused-vars */
import { Request, Response, NextFunction } from 'express';

const serverError = (err:any, req:Request, res:Response, next:NextFunction) => {
  if (err.status) {
    res.status(err.status).json({ status: err.status, message: err.message });
  } else {
    res.status(500).json({ status: 500, message: 'Server Error' });
  }
};
export default serverError;
