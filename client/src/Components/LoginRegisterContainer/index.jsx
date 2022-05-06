import React, { useState } from 'react';
import { Modal, Tabs } from 'antd';
import Register from '../Register';
import Login from '../Login';
import './style.css';

const { TabPane } = Tabs;

function LoginRegisterContainer({ isOpen, setIsOpen }) {
  const handleCancel = () => {
    setIsOpen(false);
  };
  return (
    <Modal
      title=" من فضلك قم بتسجيل الدخول للاستمرار "
      visible={isOpen}
      onCancel={handleCancel}
      width={350}
    >
      <Tabs defaultActiveKey="1">
        <TabPane tab="إنشاء حساب" key="1">
          <Register />
        </TabPane>
        <TabPane tab="تسجيل دخول" key="2">
          <Login />
        </TabPane>
      </Tabs>
    </Modal>
  );
}
LoginRegisterContainer.propTypes = {};
export default LoginRegisterContainer;
