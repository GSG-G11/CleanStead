/* eslint-disable import/no-unresolved */
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import { Layout, message } from 'antd';
import { Navbar, OurFooter, LoginRegisterContainer } from '../Components';
import { Home, Category, Description, Book } from '../Pages';
import 'swiper/css/bundle';
import '../style/custom-antd.css';
import './app.css';

const { Header, Footer, Content } = Layout;

function App() {
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isLogged, setIsLogged] = useState(false);

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
      <Layout className="page--layout">
        <Header>
          <Navbar
            isLogged={isLogged}
            categories={categories}
            user={{ name: 'Mohammad', role: 'admin' }}
            setIsOpen={setIsOpen}
            setIsLogged={setIsLogged}
          />
          <LoginRegisterContainer
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            setIsLogged={setIsLogged}
          />
        </Header>
        <Content className="page--content">
          <Routes>
            <Route
              path="/"
              element={<Home categories={categories} loading={loading} />}
            />
            <Route
              path="/contact"
              element={<Description page="contact" categories={categories} />}
            />
            <Route path="/about" element={<Description page="about" />} />
            <Route
              path="/category/:id"
              element={<Description page="category" categories={categories} />}
            />
            <Route path="/category/:id" element={<Category />} />
            <Route
              path="/book"
              element={<Book categories={categories} setIsOpen={setIsOpen} />}
            />
          </Routes>
        </Content>
        <Footer>
          <OurFooter categories={categories} />
        </Footer>
      </Layout>
    </Router>
  );
}

export default App;
