import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Outlet } from 'react-router-dom';
import { Layout } from 'antd';
import OurFooter from '../Footer';
import Navbar from '../Navbar';
import LoginRegisterContainer from '../LoginRegisterContainer';
import { UserProvider } from '../../context/userContext';

const { Header, Footer, Content } = Layout;
function LayoutUser({ categories }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLogged, setIsLogged] = useState(false);
  return (
    <UserProvider>
      <Layout className="page--layout">
        <Header>
          <Navbar
            isLogged={isLogged}
            categories={categories}
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
          <Outlet />
        </Content>
        <Footer>
          <OurFooter categories={categories} />
        </Footer>
      </Layout>
    </UserProvider>
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
