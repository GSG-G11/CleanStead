/* eslint-disable no-undef */
import React, { useState, useContext } from 'react';
import axios from 'axios';
import { Form, Input, Button, message, Spin } from 'antd';
import {
  UserOutlined,
  MailOutlined,
  PhoneOutlined,
  LockOutlined,
  HomeOutlined,
  LoadingOutlined,
} from '@ant-design/icons';
import { ModalLoginContext } from '../../Context/ModalLogin';

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

function Register() {
  const { setIsOpen, setIsLogged } = useContext(ModalLoginContext);
  const [isloading, setIsLoading] = useState(false);
  const [errorEmail, setErrorEmail] = useState('');
  const onFinish = ({ name, email, phone, password, location }) => {
    setIsLoading(true);
    setErrorEmail('');
    axios
      .post('/api/v1/signup', { name, email, phone, password, location })
      .then(({ data }) => {
        message.success(data.message);
        setIsLoading(false);
        setIsOpen(false);
        setIsLogged(true);
      })
      .catch((err) => {
        if (err.response) {
          setErrorEmail(err.response.data.message);
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
        {errorEmail && <span className="error">{errorEmail}</span>}
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
        {isloading && <Spin indicator={antIcon} />}
        <Form.Item>
          <Button block type="primary" htmlType="submit" className="button">
            إنشاء حساب
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Register;
