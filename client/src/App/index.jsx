/* eslint-disable import/no-unresolved */
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import {
  Categories,
  Contact,
  General,
  Services,
  AdminLogin,
} from '../Components';
import { Home, Category, Description, Dashboard, Book } from '../Pages';
import 'swiper/css/bundle';
import '../style/custom-antd.css';
import './app.css';
import LayoutUser from '../Components/Layout';
import { CategoriesProvider } from '../Contexts/CategoriesContext';
import { AdminProvider } from '../Contexts/adminContext';
import { ModalLoginProvider } from '../Contexts/ModalLogin';
import { UserProvider } from '../Contexts/userContext';

function App() {
  return (
    <div>
      <CategoriesProvider>
        <AdminProvider>
          <ModalLoginProvider>
            <UserProvider>
              <Routes>
                <Route path="/login/admin" element={<AdminLogin />} />
                <Route path="dashboard" element={<Dashboard />}>
                  <Route path="/dashboard" element={<General />} />
                  <Route path="categories" element={<Categories />} />
                  <Route path="book" element={<Book />} />
                  <Route path="contact" element={<Contact />} />
                  <Route path="services" element={<Services />} />
                </Route>

                <Route path="/" element={<LayoutUser />}>
                  <Route path="/" index element={<Home />} />
                  <Route
                    path="contact"
                    element={<Description page="contact" />}
                  />
                  <Route path="about" element={<Description page="about" />} />
                  <Route
                    path="category/:id"
                    element={<Description page="category" />}
                  />
                  <Route path="category/:id" element={<Category />} />
                  <Route path="/book" element={<Book />} />
                </Route>
              </Routes>
            </UserProvider>
          </ModalLoginProvider>
        </AdminProvider>
      </CategoriesProvider>
    </div>
  );
}

export default App;
