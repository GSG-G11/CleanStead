import dotenv from 'dotenv';
import { verify } from 'jsonwebtoken';

dotenv.config();
const jwtVerify = (token:string) => new Promise((resolve, reject) => {
  verify(token, process.env.JJWT_SECRET as string, (err:any, decoded:any) => {
    if (err) {
      reject(err);
    } else {
      resolve(decoded);
    }
  });
});

export default jwtVerify;
