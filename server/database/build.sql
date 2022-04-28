BEGIN;
DROP TABLE IF EXISTS users,
categories,
services,
contact,
appoinment,
service_appoinment CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  phoneNumber INT NOT NULL,
  location TEXT NOT NULL
);

CREATE TABLE categories (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  image TEXT NOT NULL
);

CREATE TABLE services (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  description TEXT NOT NULL,
  price INT NOT NULL,
  image TEXT NOT NULL,
  categoryId INT,
  FOREIGN KEY (categoryId) REFERENCES categories(id)
);

CREATE TABLE contact (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  message TEXT NOT NULL,
  phone INT NOT NULL,
  categoryId INT,
  FOREIGN KEY (categoryId) REFERENCES categories(id)
);

CREATE TABLE appoinment (
  id SERIAL PRIMARY KEY,
  date DATE NOT NULL,
  time VARCHAR(50) NOT NULL,
  timeCreated TIMESTAMP NOT NULL,
  price INT NOT NULL,
  userId INT,
  FOREIGN KEY (userId) REFERENCES users(id),
  serviceId INT,
  FOREIGN KEY (serviceId) REFERENCES services(id)
);

CREATE TABLE service_appoinment (
  id SERIAL PRIMARY KEY,
  quantity INT NOT NULL,
  appoinmentId INT,
  FOREIGN KEY (appoinmentId) REFERENCES appoinment(id),
  serviceId INT,
  FOREIGN KEY (serviceId) REFERENCES services(id)
);
COMMIT;