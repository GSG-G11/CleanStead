import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Layout } from 'antd';
import OurFooter from '../Footer';
import Navbar from '../Navbar';
import LoginRegisterContainer from '../LoginRegisterContainer';
import { UserProvider } from '../../Contexts/userContext';

const { Header, Footer, Content } = Layout;
function LayoutUser() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <UserProvider>
      <Layout className="page--layout">
        <Header>
          <Navbar setIsOpen={setIsOpen} />
          <LoginRegisterContainer isOpen={isOpen} setIsOpen={setIsOpen} />
        </Header>
        <Content className="page--content">
          <Outlet />
        </Content>
        <Footer>
          <OurFooter />
        </Footer>
      </Layout>
    </UserProvider>
  );
}

export default LayoutUser;
