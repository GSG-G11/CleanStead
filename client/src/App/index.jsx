import React, { useEffect, useState } from 'react';
import '../style/custom-antd.css';
import './app.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ConfigProvider, Layout } from 'antd';
import axios from 'axios';
import ArEg from 'antd/lib/locale/ar_EG';
import Navbar from '../Components';

function App() {
  const [categories, setCategories] = useState([{ id: 1, name: 'test' }, { id: 2, name: 'test' }]);

  useEffect(() => {
    const cancelTokenSource = axios.CancelToken.source();
    axios.get('/categories', {
      cancelToken: cancelTokenSource.token,
    })
      .then((res) => {
        setCategories(res.data);
      });

    return () => cancelTokenSource.cancel();
  }, [categories]);

  return (
    <Router>
      <ConfigProvider locale={ArEg}>
        <Layout>
          <Navbar isLogged={false} categories={categories} user={{ name: 'Mohammad', role: 'admin' }} />
          <Routes>
            <Route
              path="/"
              element={<div>Home</div>}
            />
          </Routes>
        </Layout>
      </ConfigProvider>
    </Router>
  );
}

export default App;
