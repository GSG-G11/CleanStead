import { join } from 'path';
import { readFileSync } from 'fs';
import connection from './connection.ts';

export default () => {
  const sql = readFileSync(join(__dirname, 'build.sql'), 'utf8').toString();
  return connection.query(sql);
};
