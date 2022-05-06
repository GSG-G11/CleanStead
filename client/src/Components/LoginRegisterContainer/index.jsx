import React, { useState } from 'react';
import { Modal, Tabs } from 'antd';
import Register from '../Register';
import './style.css';

const { TabPane } = Tabs;

function LoginRegisterContainer({ isOpen, setIsOpen }) {
  const handleCancel = () => {
    setIsOpen(false);
  };
  function callback(key) {
    console.log(key);
  }
  return (
    <Modal
      title=" من فضلك قم بتسجيل الدخول للاستمرار "
      visible={isOpen}
      onCancel={handleCancel}
      width={350}
    >
      <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane tab="إنشاء حساب" key="1">
          <Register />
        </TabPane>
        <TabPane tab="تسجيل دخول" key="2">
          Login
        </TabPane>
      </Tabs>
    </Modal>
  );
}
LoginRegisterContainer.propTypes = {};
export default LoginRegisterContainer;
