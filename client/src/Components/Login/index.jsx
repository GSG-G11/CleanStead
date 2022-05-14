/* eslint-disable no-undef */
import React, { useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { Form, Input, Button, message, Spin } from 'antd';
import { MailOutlined, LockOutlined, LoadingOutlined } from '@ant-design/icons';

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

function Login({ setIsOpen, setIsLogged }) {
  const [isloading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const onFinish = ({ email, password }) => {
    setIsLoading(true);
    setError('');
    axios
      .post('/api/v1/signin', { email, password })
      .then(({ data }) => {
        message.success(data.message);
        setIsLoading(false);
        setIsOpen(false);
        setIsLogged(true);
      })
      .catch((err) => {
        if (err.response) {
          setError(err.response.data.message);
          setIsLoading(false);
        } else {
          message.error('حدث خطأ ما');
          setIsLoading(false);
        }
      });
  };
  return (
    <div>
      <Form layout="vertical" onFinish={onFinish}>
        <Form.Item
          label="الإيميل"
          name="email"
          rules={[
            {
              required: true,
              message: 'إيميل المستخدم مطلوب',
            },
            { type: 'email', message: 'يجب ادخال إيميل صحيح' },
          ]}
          hasFeedback
        >
          <Input
            placeholder=" ادخل الإيميل"
            className="input"
            prefix={<MailOutlined className="icon-style" />}
          />
        </Form.Item>
        <Form.Item
          label="كلمة السر"
          name="password"
          rules={[
            {
              required: true,
              message: ' كلمة السر للمستخدم مطلوبة',
            },
            { min: 8, message: 'يجب ادخال كلمة السر  على الاقل 8 أحرف' },
          ]}
          hasFeedback
        >
          <Input.Password
            placeholder="ادخل كلمة المرور"
            className="input"
            prefix={<LockOutlined className="icon-style" />}
          />
        </Form.Item>
        {error && <span className="error">{error}</span>}
        {isloading && <Spin indicator={antIcon} />}
        <Form.Item>
          <Button block type="primary" htmlType="submit" className="button">
            دخول
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
Login.defaultProps = {
  setIsOpen: () => {
    setIsOpen(false);
  },
  setIsLogged: () => {
    setIsLogged(false);
  },
};
Login.propTypes = {
  setIsOpen: PropTypes.func,
  setIsLogged: PropTypes.func,
};
export default Login;