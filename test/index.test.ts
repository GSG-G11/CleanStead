import supertest from 'supertest';
import connection from '../server/database/connection';
import dbBuild from '../server/database/build';
import app from '../server/app';

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
describe('Test to register', () => {
  it('should return text successfuly message', async () => {
    const res = await supertest(app)
      .post('/api/v1/signup')
      .send({
        name: 'Israa',
        email: 'israa@hotmail.com',
        phone: '5645458712',
        password: '12345678',
        location: 'Gaza',
      })
      .expect(201)
      .expect('Content-Type', /json/);
    expect(res.body.message).toBe('تم تسجيل حسابك بنجاح');
  });
});
describe('Test to login', () => {
  it('should return text successfuly message', async () => {
    const res = await supertest(app)
      .post('/api/v1/signin')
      .send({
        email: 'israa@hotmail.com',
        password: '12345678',
      })
      .expect(200)
      .expect('Content-Type', /json/);
    expect(res.body.message).toBe('تم تسجيل دخولك بنجاح');
  });
});
describe('Test to register', () => {
  it('should return status code 400 and error message for email exist', async () => {
    const res = await supertest(app)
      .post('/api/v1/signup')
      .send({
        name: 'Israa',
        email: 'israa403@gmail.com',
        phone: '5645458714',
        password: '1234567548',
        location: 'Gaza',
      })
      .expect(400)
      .expect('Content-Type', /json/);
    expect(res.body.message).toBe('الإيميل موجود مسبقاً');
  });
});
describe('Test to register', () => {
  it('should return status code 400 and error message for email validation', async () => {
    const res = await supertest(app)
      .post('/api/v1/signup')
      .send({
        name: 'Israa',
        email: 'israa403',
        phone: '564545871',
        password: '123456',
        location: 'Gaza',
      })
      .expect(400)
      .expect('Content-Type', /json/);
    expect(res.body.message).toBe('Your email must be a valid email');
  });
});
describe('Test to register', () => {
  it('should return status code 400 and error message for phone validation', async () => {
    const res = await supertest(app)
      .post('/api/v1/signup')
      .send({
        name: 'Israa',
        email: 'israa403@gmail.com',
        phone: '5645471',
        password: '123456',
        location: 'Gaza',
      })
      .expect(400)
      .expect('Content-Type', /json/);
    expect(res.body.message).toBe('your phone number must be 10 digits');
  });
});
describe('Test to add Contact', () => {
  it('should return one contact', async () => {
    const res = await supertest(app)
      .post('/api/v1/contact')
      .send({
        name: 'Israa',
        email: 'israa@hotmail.com',
        messageInfo: 'i need more details',
        phone: '1015465455',
        categoryId: 1,
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
        messageInfo: 'i need more details',
        phone: 5645,
        categoryId: 1,
      })
      .expect(400)
      .expect('Content-Type', /json/);
    expect(res.body.message).toBe('Your email must be a valid email');
  });
});
describe('Test to login', () => {
  it('should return status code 400 and error message for email validation', async () => {
    const res = await supertest(app)
      .post('/api/v1/signin')
      .send({
        email: 'israa403',
        password: '1545465',
      })
      .expect(400)
      .expect('Content-Type', /json/);
    expect(res.body.message).toBe('Your email must be a valid email');
  });
});
describe('Test to login', () => {
  it('should return status code 400 and error message for email validation', async () => {
    const res = await supertest(app)
      .post('/api/v1/signin')
      .send({
        email: 'israahamdi@hotmail.com',
        password: '1545465412',
      })
      .expect(400)
      .expect('Content-Type', /json/);
    expect(res.body.message).toBe('يوجد خطأ بالإيميل أو كلمة السر');
  });
});

describe('Test post service', () => {
  it('should return status 201', async () => {
    const res = await supertest(app)
      .post('/api/v1/services')
      .send({
        name: 'test',
        description: 'test',
        price: 10,
        image: 'ka;hkjdgh;askdh',
        categoryId: 1,
      })
      .expect(201)
      .expect('Content-Type', /json/);
    expect(res.body.message).toBe('تم إضافة الخدمة بنجاح');
  });
});

describe('Test post service', () => {
  it('should return status code 400 and error message for price validation', async () => {
    const res = await supertest(app)
      .post('/api/v1/services')
      .send({
        name: 'test',
        description: 'test',
        price: 0,
        image: 'ka;hkjdgh;askdh',
        categoryId: 1,
      })
      .expect(400)
      .expect('Content-Type', /json/);
    expect(res.body.message).toBe('Price must be large than 0');
  });
});

describe('Test get books', () => {
  it('should return status code 200 and the length 6', async () => {
    const res = await supertest(app)
      .get('/api/v1/book')
      .expect(200)
      .expect('Content-Type', /json/);
    expect(res.body.data.length).toBe(6);
  });
});
