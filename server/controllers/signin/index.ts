import { RequestHandler } from 'express';
import { sign } from 'jsonwebtoken';
import { compare } from 'bcrypt';
import dotenv from 'dotenv';
import { checkEmailExistsQuery } from '../../queries';
import CustomizedError from '../../utils/error';
import { signinSchema } from '../../validation';

dotenv.config();
const signin: RequestHandler = async (req, res, next) => {
  try {
    const {
      email, password,
    } = req.body;
    await signinSchema.validate(req.body, { abortEarly: false });
    const { rowCount, rows: data } = await checkEmailExistsQuery(email);
    if (rowCount === 0) {
      throw new CustomizedError(400, 'الايميل غير موجودة مسبقاً الرجاء تسجيل حسابك أولاً');
    }
    const resultComapre = await compare(password, data[0].password);
    if (!resultComapre) {
      throw new CustomizedError(400, 'يرجى التأكد من كلمة السر ');
    }
    const token = sign({ id: data[0].id, email: data[0].email }, process.env.SECRET_KEY as string);
    res.cookie('token', token, { httpOnly: true, secure: true }).status(200).json({ message: 'تم تسجيل دخولك بنجاح', status: 200 });
  } catch (error: any) {
    if (error.name === 'ValidationError') {
      return next(new CustomizedError(400, error.errors[0]));
    }
    next(error);
  }
};

export default signin;
