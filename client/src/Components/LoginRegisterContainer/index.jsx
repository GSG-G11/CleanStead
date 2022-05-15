/* eslint-disable no-undef */
import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Tabs } from 'antd';
import Register from '../Register';
import Login from '../Login';
import './style.css';

const { TabPane } = Tabs;

function LoginRegisterContainer({ isOpen, setIsOpen, setIsLogged }) {
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
          <Register setIsOpen={setIsOpen} setIsLogged={setIsLogged} />
        </TabPane>
        <TabPane tab="تسجيل دخول" key="2">
          <Login setIsOpen={setIsOpen} setIsLogged={setIsLogged} />
        </TabPane>
      </Tabs>
    </Modal>
  );
}
LoginRegisterContainer.defaultProps = {
  isOpen: false,
  setIsOpen: () => {
    setIsOpen(false);
  },
  setIsLogged: () => {
    setIsLogged(false);
  },
};
LoginRegisterContainer.propTypes = {
  isOpen: PropTypes.bool,
  setIsOpen: PropTypes.func,
  setIsLogged: PropTypes.func,
};
export default LoginRegisterContainer;
