import { RequestHandler } from 'express';
import { hash } from 'bcrypt';
import dotenv from 'dotenv';
import { addUserQuery, checkEmailExistsQuery } from '../../queries';
import CustomizedError from '../../utils/error';
import { jwtSign } from '../../utils/jwt';
import { signupSchema } from '../../validation';

dotenv.config();
const signup: RequestHandler = async (req, res, next) => {
  try {
    const {
      name, email, password, phone, location,
    } = await signupSchema.validate(req.body, { abortEarly: false });
    const { rowCount } = await checkEmailExistsQuery(email);
    if (rowCount) {
      throw new CustomizedError(400, 'الإيميل موجود مسبقاً');
    }
    const hashedPassword = await hash(password, 10);
    const { rows: data } = await addUserQuery(name, email, phone, hashedPassword, location);
    const token = await jwtSign({ id: data[0].id, email: data[0].email });
    res.cookie('token', token, { httpOnly: true, secure: true }).status(201).json({ message: 'تم تسجيل حسابك بنجاح', status: 201 });
  } catch (error: any) {
    if (error.name === 'ValidationError') {
      return next(new CustomizedError(400, error.errors[0]));
    }
    next(error);
  }
};

export default signup;
