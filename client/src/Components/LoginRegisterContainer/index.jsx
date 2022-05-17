/* eslint-disable no-undef */
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Modal, Tabs } from 'antd';
import { ModalLoginContext } from '../../Context/ModalLogin';
import Register from '../Register';
import Login from '../Login';
import './style.css';

const { TabPane } = Tabs;

function LoginRegisterContainer({ setIsLogged }) {
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
          <Register setIsLogged={setIsLogged} />
        </TabPane>
        <TabPane tab="تسجيل دخول" key="2">
          <Login setIsLogged={setIsLogged} />
        </TabPane>
      </Tabs>
    </Modal>
  );
}

LoginRegisterContainer.defaultProps = {
  setIsLogged: () => {
    setIsLogged(false);
  },
};

LoginRegisterContainer.propTypes = {
  setIsLogged: PropTypes.func,
};

export default LoginRegisterContainer;
