/* eslint-disable no-undef */
/* eslint-disable max-len */
import supertest from 'supertest';
import connection from '../server/database/connection';
import dbBuild from '../server/database/build';
import app from '../server/app';

const token = 'token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJtb3N0YWZhcWFub280MDNAZ21haWwuY29tIiwiaWF0IjoxNjUyOTU5MTg2fQ.JPl7-xCgUDXJ5b8qvJfew61dttDfK4TCQ3NnGgMye6c';

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

describe('Test archived Service', () => {
  it('should return status code 200 and message', async () => {
    const res = await supertest(app)
      .delete('/api/v1/services/3')
      .expect(200)
      .expect('Content-Type', /json/);
    expect(res.body.message).toBe('Service archived successfully!');
  });
});

describe('Test get books', () => {
  it('should return status code 200 and the length 22', async () => {
    const res = await supertest(app)
      .get('/api/v1/book')
      .expect(200)
      .expect('Content-Type', /json/);
    expect(res.body.data.length).toBe(22);
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
  it('should return status 200', async () => {
    const res = await supertest(app)
      .put('/api/v1/categories/2')
      .send({
        name: 'testtestdaf',
        description: 'asdasdasd',
        image: 'ka;hkjdgh;askdh',
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
        description: '',
        image: 'ka;hkjdgh;askdh',
      })
      .set({ Cookie: token })
      .expect(400)
      .expect('Content-Type', /json/);
    expect(res.body.message).toBe('Description is required');
  });
});
describe('Test archived category', () => {
  it('should return status code 200 and message', async () => {
    const res = await supertest(app)
      .delete('/api/v1/categories/3')
      .expect(200)
      .expect('Content-Type', /json/);
    expect(res.body.message).toBe('Category archived successfully!');
  });
});

describe('Test archived book', () => {
  it('should return status code 200 and message', async () => {
    const res = await supertest(app)
      .delete('/api/v1/book/2')
      .expect(200)
      .expect('Content-Type', /json/);
    expect(res.body.data.length).toBe(1);
  });

  it('should return status code 400 and message', async () => {
    const res = await supertest(app)
      .delete('/api/v1/book/25')
      .expect(400)
      .expect('Content-Type', /json/);
    expect(res.body.message).toBe('لا يوجد حجز بهذا الرقم');
  });
});

describe('Test post book', () => {
  it('should return status 201', async () => {
    const res = await supertest(app)
      .post('/api/v1/book')
      .send({
        dateTime: '2022-05-17 13:00',
        price: 17,
        repeat: 'مرة واحدة',
        userId: 1,
        services: [{ serviceId: 1, quantity: 5 }, { serviceId: 2, quantity: 5 }, { serviceId: 3, quantity: 5 }],
      })
      .set({ Cookie: token })
      .expect(201)
      .expect('Content-Type', /json/);
    expect(res.body.message).toBe('تم إضافة الطلب بنجاح');
  });
});

describe('Test post book', () => {
  it('should return status 400', async () => {
    const res = await supertest(app)
      .post('/api/v1/book')
      .send({
        dateTime: '2022-05-17 13:00',
        price: 0,
        repeat: 'مرة واحدة',
        userId: 1,
        services: [{ serviceId: 1, quantity: 5 }, { serviceId: 2, quantity: 5 }, { serviceId: 3, quantity: 5 }],
      })
      .set({ Cookie: token })
      .expect(400)
      .expect('Content-Type', /json/);
    expect(res.body.message).toBe('Price must be large than 0');
  });
});
describe('Test Status Book', () => {
  it('should return status 200', async () => {
    const res = await supertest(app)
      .get('/api/v1/book/status')
      .expect(200)
      .expect('Content-Type', /json/);
    expect(res.body.data.length).toBe(3);
  });
  it('should return status 200 and response for total second item 2', async () => {
    const res = await supertest(app)
      .get('/api/v1/book/status')
      .expect(200)
      .expect('Content-Type', /json/);
    expect(res.body.data[1].total).toBe('12');
  });
  it('should return status 200 and check for data return', async () => {
    const res = await supertest(app)
      .get('/api/v1/book/status')
      .expect(200)
      .expect('Content-Type', /json/);
    expect(res.body.data).toEqual([
      { alltotal: '23', total: '5', status: 'approve' },
      { alltotal: '23', total: '12', status: 'decline' },
      { alltotal: '23', total: '6', status: 'pending' },
    ]);
  });
});

describe('Test Book for day and month', () => {
  it('should return status 200 and hours for booking today', async () => {
    const res = await supertest(app)
      .get('/api/v1/book/day')
      .expect(200)
      .expect('Content-Type', /json/);
    expect(res.body.hoursForDay).toEqual(['4', '8', '10', '23']);
  });
  it('should return status 200 and number of request in hour for recent day', async () => {
    const res = await supertest(app)
      .get('/api/v1/book/day')
      .expect(200)
      .expect('Content-Type', /json/);
    expect(res.body.numberOfRequest).toEqual([3, 1, 1, 1]);
  });
  it('should return status 200 and day for booking month', async () => {
    const res = await supertest(app)
      .get('/api/v1/book/month')
      .expect(200)
      .expect('Content-Type', /json/);
    expect(res.body.daysForMonth).toEqual(['1', '2', '6', '17', '20', '21', '23']);
  });
  it('should return status 200 and number of request in day for recent month', async () => {
    const res = await supertest(app)
      .get('/api/v1/book/month')
      .expect(200)
      .expect('Content-Type', /json/);
    expect(res.body.numberOfRequest).toEqual([2, 1, 1, 1, 1, 1, 6]);
  });
});
