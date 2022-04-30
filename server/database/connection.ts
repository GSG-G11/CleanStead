import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const {
  NODE_ENV, DEV_DB_URL, TEST_DB_URL, DATABASE_URL,
} = process.env;

let DB_URL: string = '';
let sslValue: any = false;

switch (NODE_ENV) {
  case 'production':
    DB_URL = DATABASE_URL;
    sslValue = { rejectUnauthorized: false };
    break;
  case 'development':
    DB_URL = DEV_DB_URL;
    break;
  case 'test':
    DB_URL = TEST_DB_URL;
    break;
  default:
    throw new Error('No Database Found');
}

const options: object = {
  connectionString: DB_URL,
  ssl: sslValue,
};

export default new Pool(options);
