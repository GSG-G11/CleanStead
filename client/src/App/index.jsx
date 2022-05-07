import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import { Layout, message } from 'antd';
import { Navbar, Footer, LoginRegisterContainer } from '../Components';
import { Home, Category } from '../Pages';
import '../style/custom-antd.css';
import './app.css';

function App() {
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

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
    <Router>
      <Layout>
        <Navbar
          isLogged={false}
          categories={categories}
          user={{ name: 'Mohammad', role: 'admin' }}
          setIsOpen={setIsOpen}
        />
        <LoginRegisterContainer isOpen={isOpen} setIsOpen={setIsOpen} />
        <Routes>
          <Route
            path="/"
            element={<Home categories={categories} loading={loading} />}
          />
          <Route path="/category/:id" element={<Category />} />
        </Routes>
        <Footer categories={categories} />
      </Layout>
    </Router>
  );
}

export default App;
