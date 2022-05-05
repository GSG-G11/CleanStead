import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import { Layout } from 'antd';

import { Home, Category } from '../Pages';
import { Navbar } from '../Components';
// eslint-disable-next-line import/no-unresolved
import 'swiper/css/bundle';

import '../style/custom-antd.css';
import './app.css';

function App() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const cancelTokenSource = axios.CancelToken.source();
    axios
      .get('/api/v1/categories', {
        cancelToken: cancelTokenSource.token,
      })
      .then(({ data }) => {
        setCategories(data.data);
      });

    return () => cancelTokenSource.cancel();
  }, []);

  return (
    <Router>
      <Layout>
        <Navbar
          isLogged={false}
          categories={categories}
          user={{ name: 'Mohammad', role: 'admin' }}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/category/:id"
            element={<Category categories={categories} />}
          />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
