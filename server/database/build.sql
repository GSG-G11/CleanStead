BEGIN;

DROP TABLE IF EXISTS users,
admins,
categories,
services,
contacts,
appoinments,
services_appoinments CASCADE;

CREATE TABLE admins (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL
);

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  phone VARCHAR(30) NOT NULL,
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
  category_id INT,
  FOREIGN KEY (category_id) REFERENCES categories(id)
);

CREATE TABLE contacts (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  email VARCHAR(255) NOT NULL,
  message TEXT NOT NULL,
  phone VARCHAR(30) NOT NULL,
  category_id INT,
  FOREIGN KEY (category_id) REFERENCES categories(id)
);

CREATE TABLE appoinments (
  id SERIAL PRIMARY KEY,
  date DATE NOT NULL,
  time VARCHAR(50) NOT NULL,
  creation_time TIMESTAMP NOT NULL,
  price INT NOT NULL,
  user_id INT,
  status VARCHAR(50) DEFAULT 'Pending',
  FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE services_appoinments (
  id SERIAL PRIMARY KEY,
  quantity INT NOT NULL,
  appoinment_id INT,
  FOREIGN KEY (appoinment_id) REFERENCES appoinments(id),
  service_id INT,
  FOREIGN KEY (service_id) REFERENCES services(id)
);

COMMIT;