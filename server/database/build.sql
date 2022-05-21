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
  password VARCHAR(255) NOT NULL,
  archived BOOLEAN DEFAULT FALSE
);

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  phone VARCHAR(30) NOT NULL,
  lat TEXT DEFAULT '31.50310344657815',
  lng TEXT DEFAULT '34.46672153290604',
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
  status VARCHAR(255) DEFAULT 'معلق',
  sendTime TIMESTAMP DEFAULT NOW(),
  phone VARCHAR(30) NOT NULL,
  category_id INT,
  archived BOOLEAN DEFAULT FALSE,
  FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE CASCADE
);

CREATE TABLE appoinments (
  id SERIAL PRIMARY KEY,
  date_time TIMESTAMP NOT NULL,
  creation_time TIMESTAMP NOT NULL,
  price INT NOT NULL,
  status VARCHAR(50) DEFAULT 'معلق',
  repeat VARCHAR(50) DEFAULT 'مرة واحدة',
  archived BOOLEAN DEFAULT FALSE,
  user_id INT,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE services_appoinments (
  id SERIAL PRIMARY KEY,
  quantity INT NOT NULL,
  appoinment_id INT,
  FOREIGN KEY (appoinment_id) REFERENCES appoinments(id) ON DELETE CASCADE,
  service_id INT,
  FOREIGN KEY (service_id) REFERENCES services(id) ON DELETE CASCADE
);

COMMIT;