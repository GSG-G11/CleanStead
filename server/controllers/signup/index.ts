import { RequestHandler } from 'express';
import { hash } from 'bcrypt';
import dotenv from 'dotenv';
import { addUserQuery, checkEmailExistsQuery } from '../../queries';
import { jwtSign, CustomizedError } from '../../utils';
import { signupSchema } from '../../validation';

dotenv.config();
const signup: RequestHandler = async (req, res, next) => {
  try {
    const {
      name, email, password, phone, locationDetails,
    } = await signupSchema.validate(req.body, { abortEarly: false });
    const { rowCount } = await checkEmailExistsQuery(email);
    if (rowCount) {
      throw new CustomizedError(400, 'Email already exists');
    }
    const hashedPassword = await hash(password, 10);
    const { rows: data } = await addUserQuery(
      name,
      email,
      phone,
      hashedPassword,
      locationDetails.name,
      locationDetails.lat,
      locationDetails.lng,
    );
    const token = await jwtSign({
      id: data[0].id,
      email,
      name,
      phone,
      locationDetails,
      role: 'user',
    });
    res.cookie('token', token).status(201).json({ message: 'You have been successfully register', status: 201 });
  } catch (error: any) {
    if (error.name === 'ValidationError') {
      return next(new CustomizedError(400, error.errors[0]));
    }
    next(error);
  }
};

export default signup;
