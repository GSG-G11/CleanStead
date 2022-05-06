import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import { Layout } from 'antd';
import { Home, Category } from '../Pages';
import { Navbar } from '../Components';
import '../style/custom-antd.css';
import './app.css';

const { Header, Content } = Layout;

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
        <Header>
          <Navbar
            isLogged={false}
            categories={categories}
            user={{ name: 'Mohammad', role: 'admin' }}
          />
        </Header>
        <Content style={{ padding: '0 100px' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category/:id" element={<Category />} />
          </Routes>
        </Content>
      </Layout>
    </Router>
  );
}

export default App;
