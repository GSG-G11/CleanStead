import React, { useEffect, useState } from 'react';
import '../style/custom-antd.css';
import './app.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from 'antd';
import axios from 'axios';
import { Navbar } from '../Components';

function App() {
  const [categories, setCategories] = useState([{ id: 1, name: 'test' }, { id: 2, name: 'test' }]);

  useEffect(() => {
    const cancelTokenSource = axios.CancelToken.source();
    axios.get('/api/v1/categories', {
      cancelToken: cancelTokenSource.token,
    })
      .then((res) => {
        setCategories(res.data);
      });

    return () => cancelTokenSource.cancel();
  }, [categories]);

  return (
    <Router>
      <Layout>
        <Navbar isLogged={false} categories={categories} user={{ name: 'Mohammad', role: 'admin' }} />
        <Routes>
          <Route
            path="/"
            element={<div>Home</div>}
          />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
