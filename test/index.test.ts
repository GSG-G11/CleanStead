import supertest from 'supertest';
import connection from '../server/database/connection';
import dbBuild from '../server/database/build';
import app from '../server/app';

beforeAll(dbBuild);
afterAll(() => connection.end());

describe('Test Get Categories', () => {
  it('should return six categories', async () => {
    const res = await supertest(app)
      .get('/api/v1/categories')
      .expect(200)
      .expect('Content-Type', /json/);
    expect(res.body.data.length).toBe(5);
  });
});
