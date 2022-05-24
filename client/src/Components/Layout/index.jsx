import React from 'react';
import { Outlet } from 'react-router-dom';
import { Layout } from 'antd';
import OurFooter from '../Footer';
import Navbar from '../Navbar';
import LoginRegisterContainer from '../LoginRegisterContainer';

const { Header, Footer, Content } = Layout;
function LayoutUser() {
  return (
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
  );
}

export default LayoutUser;
