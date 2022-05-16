import React from 'react';
import PropTypes from 'prop-types';
import { Outlet } from 'react-router-dom';
import { Layout } from 'antd';
import OurFooter from '../Footer';
import Navbar from '../Navbar';

const { Header, Footer, Content } = Layout;
function LayoutUser({ categories }) {
  return (
    <Layout className="page--layout">
      <Header>
        <Navbar
          isLogged={false}
          categories={categories}
          user={{ name: 'Mohammad', role: 'admin' }}
        />
      </Header>
      <Content className="page--content">
        <Outlet />
      </Content>
      <Footer>
        <OurFooter categories={categories} />
      </Footer>
    </Layout>
  );
}
LayoutUser.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      description: PropTypes.string,
      image: PropTypes.string,
    })
  ).isRequired,
};
export default LayoutUser;
