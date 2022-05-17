import supertest from 'supertest';
import connection from '../server/database/connection';
import dbBuild from '../server/database/build';
import app from '../server/app';

const token = 'token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTcsImVtYWlsIjoiaXNyYWE2NTZAaG90bWFpbC5jb20iLCJpYXQiOjE2NTI2MDI3ODB9.o0VgCAxids643zfDxO30Vhb2jaBYDZnR3v6p-3ev4Hc';

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
        locationDetails: {
          name: 'غزة',
        },
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
        locationDetails: {
          name: 'الشمال',
          lat: '31.529191502894275',
          lng: '34.47942428475519',
        },
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
        locationDetails: {
          name: 'الشمال',
          lat: '31.529191502894275',
          lng: '34.47942428475519',
        },
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
describe('Test to add contact', () => {
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
describe('Test post categories', () => {
  it('should return status 201', async () => {
    const res = await supertest(app)
      .post('/api/v1/categories')
      .send({
        name: 'mostafa',
        description: 'mostafa',
        image: 'dsfdsfsdggs',
      })
      .expect(201)
      .expect('Content-Type', /json/);
    expect(res.body.message).toBe('تم إضافة الخدمة بنجاح');
  });
});
describe('Test post categories', () => {
  it('should return status 201', async () => {
    const res = await supertest(app)
      .post('/api/v1/categories')
      .send({
        name: 'mostafa',
        description: '',
        image: 'dsfdsfsdggs',
      })
      .expect(400)
      .expect('Content-Type', /json/);
    expect(res.body.message).toBe('Description is required');
  });
});
describe('Test post categories', () => {
  it('should return status 201', async () => {
    const res = await supertest(app)
      .post('/api/v1/categories')
      .send({
        name: '',
        description: 'mostafa sadasd',
        image: 'dsfdsfsdggs',
      })
      .expect(400)
      .expect('Content-Type', /json/);
    expect(res.body.message).toBe('Name is required');
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

describe('Test delete service', () => {
  it('should return status 200', async () => {
    const res = await supertest(app)
      .delete('/api/v1/services/4')
      .set({ Cookie: token })
      .expect(200)
      .expect('Content-Type', /json/);
    expect(res.body.message).toBe('تم حذف الخدمة بنجاح!');
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

  it('should return status code 200 and the length 2', async () => {
    const res = await supertest(app)
      .get('/api/v1/user/1/book')
      .expect(200)
      .expect('Content-Type', /json/);
    expect(res.body.data.length).toBe(2);
  });

  it('should return status code 200 and the length 1', async () => {
    const res = await supertest(app)
      .get('/api/v1/book/1')
      .expect(200)
      .expect('Content-Type', /json/);
    expect(res.body.data.length).toBe(1);
  });
});
describe('Test to admin login', () => {
  it('should return error message for validation', async () => {
    const res = await supertest(app)
      .post('/api/v1/admin/signin')
      .send({
        email: '',
        password: '12345678',
      })
      .expect(400)
      .expect('Content-Type', /json/);
    expect(res.body.message).toBe('Your email is required to login');
  });
});
describe('Test to admin login', () => {
  it('should return error message for login', async () => {
    const res = await supertest(app)
      .post('/api/v1/admin/signin')
      .send({
        email: 'admin@gmail.com',
        password: '12345678',
      })
      .expect(400)
      .expect('Content-Type', /json/);
    expect(res.body.message).toBe('يوجد خطأ بالإيميل أو كلمة السر');
  });
});
describe('Test to admin login', () => {
  it('should return successfuly message for login', async () => {
    const res = await supertest(app)
      .post('/api/v1/admin/signin')
      .send({
        email: 'admin@gmail.com',
        password: 'admin@password.com',
      })
      .expect(200)
      .expect('Content-Type', /json/);
    expect(res.body.message).toBe('تم تسجيل دخولك بنجاح');
  });
});

describe('Test put service', () => {
  it('should return status 201', async () => {
    const res = await supertest(app)
      .put('/api/v1/services/2')
      .send({
        name: 'testtestdaf',
        description: 'testgadga',
        price: 20,
        image: 'ka;hkjdgh;askdh',
        categoryId: 2,
      })
      .set({ Cookie: token })
      .expect(200)
      .expect('Content-Type', /json/);
    expect(res.body.message).toBe('تم تعديل الخدمة بنجاح');
  });
});
describe('Test put service', () => {
  it('should return status 400', async () => {
    const res = await supertest(app)
      .put('/api/v1/services/2')
      .send({
        name: 'testtestdaf',
        description: '',
        price: 20,
        image: 'ka;hkjdgh;askdh',
        categoryId: 2,
      })
      .set({ Cookie: token })
      .expect(400)
      .expect('Content-Type', /json/);
    expect(res.body.message).toBe('Description is required');
  });
});

describe('Test put category', () => {
  it('should return status 400', async () => {
    const res = await supertest(app)
      .put('/api/v1/categories/2')
      .send({
        name: 'testtestdaf',
        description: 'asdasdasd',
        price: 20,
        image: 'ka;hkjdgh;askdh',
        categoryId: 2,
      })
      .set({ Cookie: token })
      .expect(200)
      .expect('Content-Type', /json/);
    expect(res.body.message).toBe('تم تعديل الخدمة بنجاح');
  });
});

describe('Test put category', () => {
  it('should return status 400', async () => {
    const res = await supertest(app)
      .put('/api/v1/categories/2')
      .send({
        name: 'testtestdaf',
        description: 'adasdsa',
        price: 20,
        image: 'ka;hkjdgh;askdh',
        categoryId: 2,
      })
      .expect(401)
      .expect('Content-Type', /json/);
    expect(res.body.message).toBe('UnAuthorized');
  });
});

describe('Test put category', () => {
  it('should return status 400', async () => {
    const res = await supertest(app)
      .put('/api/v1/categories/2')
      .send({
        name: 'testtestdaf',
        description: '',
        price: 20,
        image: 'ka;hkjdgh;askdh',
        categoryId: 2,
      })
      .set({ Cookie: token })
      .expect(400)
      .expect('Content-Type', /json/);
    expect(res.body.message).toBe('Description is required');
  });
});
