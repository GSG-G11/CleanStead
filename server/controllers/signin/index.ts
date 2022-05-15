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
      throw new CustomizedError(400, 'يوجد خطأ بالإيميل أو كلمة السر');
    }
    const resultComapre = await compare(password, data[0].password);
    if (!resultComapre) {
      throw new CustomizedError(400, 'يوجد خطأ بالإيميل أو كلمة السر');
    }
    const token = await jwtSign({ id: data[0].id, email });
    res.cookie('token', token, { httpOnly: true, secure: true }).json({ message: 'تم تسجيل دخولك بنجاح', status: 200 });
  } catch (error: any) {
    if (error.name === 'ValidationError') {
      return next(new CustomizedError(400, error.errors[0]));
    }
    next(error);
  }
};

export default signin;
