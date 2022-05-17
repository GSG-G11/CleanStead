/* eslint-disable import/no-unresolved */
import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import { message } from 'antd';
import {
  Book,
  Categories,
  Contact,
  General,
  Services,
  LoginAdmin,
} from '../Components';
import { Home, Category, Description, Dashboard } from '../Pages';
import 'swiper/css/bundle';
import '../style/custom-antd.css';
import './app.css';
import LayoutUser from '../Components/Layout';

function App() {
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const cancelTokenSource = axios.CancelToken.source();
    setLoading(true);
    axios
      .get('/api/v1/categories', {
        cancelToken: cancelTokenSource.token,
      })
      .then(({ data: { data } }) => {
        setCategories(data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
        message.error('حدث خطأ ما');
      });

    return () => cancelTokenSource.cancel();
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/login/admin" element={<LoginAdmin />} />
        {/* <Route path="/" element={<Dashboard />}>
          <Route path="dashboard" element={<General />} />
          <Route path="categories/admin" element={<Categories />} />
          <Route path="book/admin" element={<Book />} />
          <Route path="contact/admin" element={<Contact />} />
          <Route path="services/admin" element={<Services />} />
        </Route> */}
        <Route path="dashboard" element={<Dashboard />}>
          <Route path="/dashboard" element={<General />} />
          <Route path="categories" element={<Categories />} />
          <Route path="book" element={<Book />} />
          <Route path="contact" element={<Contact />} />
          <Route path="services" element={<Services />} />
        </Route>
        <Route path="/" element={<LayoutUser categories={categories} />}>
          <Route
            path="/"
            index
            element={<Home categories={categories} loading={loading} />}
          />
          <Route
            path="contact"
            element={<Description page="contact" categories={categories} />}
          />
          <Route path="about" element={<Description page="about" />} />
          <Route
            path="category/:id"
            element={<Description page="category" categories={categories} />}
          />
          <Route path="category/:id" element={<Category />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
