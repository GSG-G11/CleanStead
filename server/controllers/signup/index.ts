import { RequestHandler } from 'express';
import { sign } from 'jsonwebtoken';
import { hash } from 'bcrypt';
import dotenv from 'dotenv';
import { addUserQuery, checkEmailExistsQuery } from '../../queries';
import CustomizedError from '../../utils/error';
import { signupSchema } from '../../validation';

dotenv.config();
const signup: RequestHandler = async (req, res, next) => {
  try {
    const {
      name, email, password, phone, location,
    } = req.body;
    await signupSchema.validate(req.body, { abortEarly: false });
    const { rowCount } = await checkEmailExistsQuery(email);
    if (rowCount) {
      throw new CustomizedError(400, 'الإيميل موجود مسبقاً');
    }
    const hashedPassword = await hash(password, 10);
    const { rows } = await addUserQuery(name, email, phone, hashedPassword, location);
    const token = sign({ id: rows[0].id, email: rows[0].email }, process.env.SECRET_KEY as string);
    res.cookie('token', token, { httpOnly: true, secure: true }).json({ message: 'تم تسجيل حسابك بنجاح', status: 201 });
  } catch (error: any) {
    if (error.name === 'ValidationError') {
      return next(new CustomizedError(400, error.errors[0]));
    }
    next(error);
  }
};

export default signup;
