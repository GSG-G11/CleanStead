BEGIN;

DROP TABLE IF EXISTS users,
admins,
categories,
services,
contacts,
appointments,
services_appointments CASCADE;

CREATE TABLE admins (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  archived BOOLEAN DEFAULT FALSE
);

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  phone VARCHAR(30) NOT NULL,
  lat FLOAT DEFAULT 31.50310344657815,
  lng FLOAT DEFAULT 34.46672153290604,
  location TEXT NOT NULL,
  archived BOOLEAN DEFAULT FALSE
);

CREATE TABLE categories (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  image TEXT NOT NULL,
  archived BOOLEAN DEFAULT FALSE
);

CREATE TABLE services (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  description TEXT NOT NULL,
  price INT NOT NULL,
  image TEXT NOT NULL,
  category_id INT,
  archived BOOLEAN DEFAULT FALSE,
  FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE CASCADE
);

CREATE TABLE contacts (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  email VARCHAR(255) NOT NULL,
  message TEXT NOT NULL,
  status VARCHAR(255) DEFAULT 'pending',
  sendTime TIMESTAMP DEFAULT NOW(),
  phone VARCHAR(30) NOT NULL,
  category_id INT,
  archived BOOLEAN DEFAULT FALSE,
  FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE CASCADE
);

CREATE TABLE appointments (
  id SERIAL PRIMARY KEY,
  date_time TIMESTAMP NOT NULL,
  creation_time TIMESTAMP DEFAULT NOW(),
  price INT NOT NULL,
  name VARCHAR(50) NOT NULL,
  phone VARCHAR(30) NOT NULL,
  location TEXT NOT NULL,
  lat FLOAT,
  lng FLOAT,
  status VARCHAR(50) DEFAULT 'pending',
  repeat VARCHAR(50) DEFAULT 'مرة واحدة',
  archived BOOLEAN DEFAULT FALSE,
  user_id INT,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE services_appointments (
  id SERIAL PRIMARY KEY,
  quantity INT NOT NULL,
  appointment_id INT,
  FOREIGN KEY (appointment_id) REFERENCES appointments(id) ON DELETE CASCADE,
  service_id INT,
  FOREIGN KEY (service_id) REFERENCES services(id) ON DELETE CASCADE
);

COMMIT;