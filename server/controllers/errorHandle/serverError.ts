/* eslint-disable no-unused-vars */
import { ErrorRequestHandler } from 'express';

const serverError:ErrorRequestHandler = (err, req, res, next) => {
  console.log('error', err);
  if (err.status) {
    res.status(err.status).json({ status: err.status, message: err.message });
  } else {
    res.status(500).json({ status: 500, message: 'Internal Server Error' });
  }
};
export default serverError;
