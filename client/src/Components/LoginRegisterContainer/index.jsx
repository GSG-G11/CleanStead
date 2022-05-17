/* eslint-disable no-undef */
import React, { useContext } from 'react';
import { Modal, Tabs } from 'antd';
import { ModalLoginContext } from '../../Context/ModalLogin';
import Register from '../Register';
import Login from '../Login';
import './style.css';

const { TabPane } = Tabs;

function LoginRegisterContainer() {
  const { isOpen, setIsOpen } = useContext(ModalLoginContext);
  const handleCancel = () => {
    setIsOpen(false);
  };
  return (
    <Modal
      title=" من فضلك قم بتسجيل الدخول للاستمرار "
      visible={isOpen}
      onCancel={handleCancel}
      width={430}
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

export default LoginRegisterContainer;
