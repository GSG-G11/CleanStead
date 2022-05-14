/* eslint-disable import/no-unresolved */
import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import axios from 'axios';
import { Layout, message } from 'antd';
import {
  Navbar,
  OurFooter,
  Book,
  Categories,
  Contact,
  General,
  Services,
} from '../Components';
import { Home, Category, Description, Dashboard } from '../Pages';
import 'swiper/css/bundle';
import '../style/custom-antd.css';
import './app.css';

const { Header, Footer, Content } = Layout;

function App() {
  const location = useLocation();

  // const location = useHref();
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
      {location.pathname.includes('/dashborad') ? (
        <Routes>
          <Route path="dashborad" element={<Dashboard />}>
            <Route path="general" index element={<General />} />
            <Route path="categories" element={<Categories />} />
            <Route path="book" element={<Book />} />
            <Route path="contact" element={<Contact />} />
            <Route path="services" element={<Services />} />
          </Route>
        </Routes>
      ) : (
        <Layout className="page--layout">
          <Header>
            <Navbar
              isLogged={false}
              categories={categories}
              user={{ name: 'Mohammad', role: 'admin' }}
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
                element={
                  <Description page="category" categories={categories} />
                }
              />
              <Route path="/category/:id" element={<Category />} />
            </Routes>
          </Content>
          <Footer>
            <OurFooter categories={categories} />
          </Footer>
        </Layout>
      )}
    </div>
  );
}

export default App;
