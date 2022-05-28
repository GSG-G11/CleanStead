import { RequestHandler } from 'express';
import { compare } from 'bcrypt';
import dotenv from 'dotenv';
import { checkEmailExistsQuery } from '../../queries';
import { jwtSign, CustomizedError } from '../../utils';
import { signinSchema } from '../../validation';

dotenv.config();
const signin: RequestHandler = async (req, res, next) => {
  try {
    const {
      email, password,
    } = await signinSchema.validate(req.body, { abortEarly: false });
    const { rowCount, rows: data } = await checkEmailExistsQuery(email);
    if (rowCount === 0) {
      throw new CustomizedError(400, 'There have error with email or password');
    }
    const resultCompare = await compare(password, data[0].password);
    if (!resultCompare) {
      throw new CustomizedError(400, 'There have error with email or password');
    }
    const token = await jwtSign({
      id: data[0].id,
      email,
      name: data[0].name,
      phone: data[0].phone,
      location: data[0].location,
      lat: data[0].lat,
      lng: data[0].lng,
      role: 'user',
    });
    res.cookie('token', token).json({ message: 'You have been successfully logged in', status: 200 });
  } catch (error: any) {
    if (error.name === 'ValidationError') {
      return next(new CustomizedError(400, error.errors[0]));
    }
    next(error);
  }
};

export default signin;
