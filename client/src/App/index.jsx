import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import { Layout } from 'antd';
import { Home, Description } from '../Pages';
import { Navbar } from '../Components';
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
          <Route path="/" element={<Home />} />
          <Route path="Contact" element={<Description />} />
          <Route path="about" element={<Description />} />
          <Route path="/category/:id" element={<Description />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
