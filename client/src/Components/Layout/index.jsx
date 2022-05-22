import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Layout } from 'antd';
import OurFooter from '../Footer';
import Navbar from '../Navbar';
import LoginRegisterContainer from '../LoginRegisterContainer';
import { ModalLoginProvider } from '../../Contexts/ModalLogin';
import { UserProvider } from '../../Contexts/userContext';

const { Header, Footer, Content } = Layout;
function LayoutUser() {
  return (
    <UserProvider>
      <ModalLoginProvider>
        <Layout className="page--layout">
          <Header>
            <Navbar />
            <LoginRegisterContainer />
          </Header>
          <Content className="page--content">
            <Outlet />
          </Content>
          <Footer>
            <OurFooter />
          </Footer>
        </Layout>
      </ModalLoginProvider>
    </UserProvider>
  );
}

export default LayoutUser;
