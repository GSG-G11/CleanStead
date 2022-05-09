import supertest from 'supertest';
import connection from '../server/database/connection';
import dbBuild from '../server/database/build';
import app from '../server/app';
import { addContactQuery } from '../server/queries';

beforeAll(dbBuild);
afterAll(() => connection.end());

describe('Test Get Categories', () => {
  it('should return five categories', async () => {
    const res = await supertest(app)
      .get('/api/v1/categories')
      .expect(200)
      .expect('Content-Type', /json/);
    expect(res.body.data.length).toBe(5);
  });
});

describe('Test No Service for id  ', () => {
  it('should return status 404', async () => {
    const { body: { message } } = await supertest(app)
      .get('/api/v1/categories/9/services')
      .expect(404)
      .expect('Content-Type', /json/);
    const actual = message;
    const expected = 'There is no category with this Id';
    expect(actual).toBe(expected);
  });
});
describe('Test Get Servecis For First Category ', () => {
  it('should return seven servecis', async () => {
    const res = await supertest(app)
      .get('/api/v1/categories/1/services')
      .expect(200)
      .expect('Content-Type', /json/);
    expect(res.body.data.length).toBe(7);
  });
});
describe('Test Get Servecis For Second Category ', () => {
  it('should return three servecis', async () => {
    const res = await supertest(app)
      .get('/api/v1/categories/2/services')
      .expect(200)
      .expect('Content-Type', /json/);
    expect(res.body.data.length).toBe(3);
  });
});
describe('Test Get Servecis For Forth Category ', () => {
  it('should return six servecis', async () => {
    const res = await supertest(app)
      .get('/api/v1/categories/4/services')
      .expect(200)
      .expect('Content-Type', /json/);
    expect(res.body.data.length).toBe(6);
  });
});
describe('Test Get Contacts', () => {
  it('should return two contacts', async () => {
    const res = await supertest(app)
      .get('/api/v1/contact')
      .expect(200)
      .expect('Content-Type', /json/);
    expect(res.body.data.length).toBe(2);
  });
});

describe('Test to add Contact', () => {
  it('should return one contact', async () => {
    const res = await supertest(app)
      .post('/api/v1/contact')
      .send({
        name: 'Israa',
        email: 'israa@hotmail.com',
        message: 'i need more details',
        phone: '1015465455',
        category_id: 1,
      })
      .expect(201)
      .expect('Content-Type', /json/);
    expect(res.body.status).toBe(201);
  });
});
describe('Test to add register', () => {
  it('should return status code 400 and error message for email validation', async () => {
    const res = await supertest(app)
      .post('/api/v1/contact')
      .send({
        name: 'Israa',
        email: 'israa403',
        message: 'i need more details',
        phone: 5645,
        category_id: 1,
      })
      .expect(400)
      .expect('Content-Type', /json/);
    expect(res.body.message).toBe('Your email must be a valid email');
  });
});
