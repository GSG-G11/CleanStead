/* eslint-disable import/no-unresolved */
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import {
  Categories,
  Contact,
  General,
  Services,
  DashboardBook,
  AdminLogin,
} from '../Components';
import {
  Home,
  Category,
  Description,
  Dashboard,
  Book,
  Profile,
  NotFound,
} from '../Pages';
import 'swiper/css/bundle';
import '../style/custom-antd.css';
import './app.css';
import LayoutUser from '../Components/Layout';
import { CategoriesProvider } from '../Contexts/CategoriesContext';
import { ModalLoginProvider } from '../Contexts/ModalLogin';
import { UserProvider } from '../Contexts/userContext';
import { AdminProtected, UserProtected } from '../ProtectedRoute';

function App() {
  return (
    <div>
      <CategoriesProvider>
        <ModalLoginProvider>
          <UserProvider>
            <Routes>
              <Route path="/login/admin" element={<AdminLogin />} />
              <Route element={<AdminProtected />}>
                <Route path="dashboard" element={<Dashboard />}>
                  <Route path="/dashboard" element={<General />} />
                  <Route path="categories" element={<Categories />} />
                  <Route path="books" element={<DashboardBook />} />
                  <Route path="contact" element={<Contact />} />
                  <Route path="services" element={<Services />} />
                </Route>
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
                <Route element={<UserProtected />}>
                  <Route path="/book" element={<Book />} />
                  <Route path="/profile" element={<Profile />} />
                </Route>
              </Route>

              <Route path="*" element={<NotFound />} />
            </Routes>
          </UserProvider>
        </ModalLoginProvider>
      </CategoriesProvider>
    </div>
  );
}

export default App;
