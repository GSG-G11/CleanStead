import React, { useEffect, useState } from 'react';
// import 'antd/dist/antd.css';
import '../style/custom-antd.css';
import { Layout } from 'antd';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, Category } from '../Pages';
import './app.css';
import axios from 'axios';
import { Navbar } from '../Components';

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
  }, [categories]);

  return (
    <Router>
      <Layout>
      <Navbar
          isLogged={false}
          categories={categories}
          user={{ name: 'Mohammad', role: 'admin' }}
        />
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/category/:id"
            element={<Category />}
          />
          </Routes>
      </Layout>
    </Router>
  );
}

export default App;
