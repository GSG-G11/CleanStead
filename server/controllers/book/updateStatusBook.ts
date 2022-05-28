import { RequestHandler } from 'express';
import nodeMailer from 'nodemailer';
import { getEmailQuery, updateStatusBookQuery } from '../../queries';
import { bookStatusSchema } from '../../validation';
import { CustomizedError, accepetBook, declineBook } from '../../utils';

const updateStatusBook: RequestHandler = async (req, res, next) => {
  try {
    const { id: bookId } = req.params;

    const {
      status,
    } = await bookStatusSchema.validate({ ...req.body }, { abortEarly: false });
    const { rows: bookData, rowCount } = await updateStatusBookQuery(
      bookId as any,
      status,
    );

    if (!rowCount) {
      throw new CustomizedError(404, 'Book not found');
    }
    const { rows: email } = await getEmailQuery(bookData[0].user_id);

    const transporter: any = nodeMailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });
    if (status === 'approve') {
      await transporter.sendMail({
        from: process.env.EMAIL,
        to: email[0].email,
        subject: 'Booking request approved',
        html: accepetBook(bookData[0].id),
      });
    }
    if (status === 'reject') {
      await transporter.sendMail({
        from: process.env.EMAIL,
        to: email[0].email,
        subject: 'Booking request rejected',
        html: declineBook(),
      });
    }
    res.json({ message: 'Reservation has been modified', status: 200, data: bookData });
  } catch (error:any) {
    if (error.errors) {
      return next(new CustomizedError(400, error.errors[0]));
    }
    return next(error);
  }
};

export default updateStatusBook;
