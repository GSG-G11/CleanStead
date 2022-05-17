import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Layout } from 'antd';
import OurFooter from '../Footer';
import Navbar from '../Navbar';
import LoginRegisterContainer from '../LoginRegisterContainer';

const { Header, Footer, Content } = Layout;
function LayoutUser() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLogged, setIsLogged] = useState(false);
  return (
    <Layout className="page--layout">
      <Header>
        <Navbar
          isLogged={isLogged}
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
        <Outlet />
      </Content>
      <Footer>
        <OurFooter />
      </Footer>
    </Layout>
  );
}

export default LayoutUser;
