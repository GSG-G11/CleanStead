/* eslint-disable no-undef */
import React from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Button, message } from 'antd';
import {
  UserOutlined,
  MailOutlined,
  PhoneOutlined,
  LockOutlined,
  HomeOutlined,
} from '@ant-design/icons';

function Register({ setIsOpen }) {
  const onFinish = ({ name, email, phone, password, location }) => {
    const userInfoRegister = {
      name,
      email,
      phone,
      password,
      location,
    };
    console.log('userInfoRegister', userInfoRegister);
    axios
      .post('/api/v1/signup', { name, email, phone, password, location })
      .then(({ data }) => {
        console.log('data', data);
        setIsOpen(false);
      })
      .catch(() => {
        message.error('حدث خطأ ما');
      });
  };
  return (
    <div>
      <Form layout="vertical" onFinish={onFinish}>
        <Form.Item
          label="الإسم"
          name="name"
          rules={[
            {
              required: true,
              message: 'اسم المستخدم مطلوب',
            },
          ]}
          hasFeedback
        >
          <Input
            placeholder="ادخل الاسم "
            className="input"
            prefix={<UserOutlined className="icon-style" />}
          />
        </Form.Item>
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
            { min: 6, message: 'يجب ادخال كلمة السر  على الاقل 6 أحرف' },
          ]}
          hasFeedback
        >
          <Input.Password
            placeholder="ادخل كلمة المرور"
            className="input"
            prefix={<LockOutlined className="icon-style" />}
          />
        </Form.Item>
        <Form.Item
          label="رقم الجوال"
          name="phone"
          rules={[
            {
              required: true,
              message: 'رقم جوال المستخدم مطلوب',
            },
            { min: 10, message: 'يجب ادخال رقم جوال  على الاقل 10 أرقام' },
          ]}
          hasFeedback
        >
          <Input
            type="tel"
            placeholder=" ادخل رقم الجوال"
            className="input"
            prefix={<PhoneOutlined className="icon-style" rotate={90} />}
          />
        </Form.Item>
        <Form.Item
          label="العنوان"
          name="location"
          rules={[
            {
              required: true,
              message: 'عنوان المستخدم مطلوب',
            },
          ]}
          hasFeedback
        >
          <Input
            placeholder=" ادخل العنوان"
            className="input"
            prefix={<HomeOutlined className="icon-style" />}
          />
        </Form.Item>
        <Form.Item>
          <Button block type="primary" htmlType="submit" className="button">
            إنشاء حساب
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
Register.defaultProps = {
  setIsOpen: () => {
    setIsOpen(false);
  },
};
Register.propTypes = {
  setIsOpen: PropTypes.func,
};
export default Register;
