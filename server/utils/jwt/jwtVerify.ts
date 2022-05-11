import dotenv from 'dotenv';
import { verify } from 'jsonwebtoken';

dotenv.config();
const jwtVerify = (token:string) => new Promise((resolve, reject) => {
  verify(token, process.env.SECRET_KEY as string, (err, decoded) => {
    if (err) {
      reject(err);
    } else {
      resolve(decoded);
    }
  });
});

export default jwtVerify;
