import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
import {
  UserOutlined,
  MailOutlined,
  PhoneOutlined,
  LockOutlined,
} from '@ant-design/icons';
import './style.css';

function Register() {

  const onFinish = (values) => {
    console.log(values);
  };
  return (
    <div>
      <Form
        layout="vertical"
        onFinish={onFinish}
      >
        <Form.Item
          label="الإسم"
          className="form-item"
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
          className="form-item"
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
          label="رقم الجوال"
          className="form-item"
          name="phone"
          rules={[
            {
              required: true,
              message: 'رقم جوال المستخدم مطلوب',
            },
            { min: 10, message: 'يجب ادخال رقم جوال  على الاقل 10 أرقام' },
          ]}
        >
          <Input
            placeholder=" ادخل رقم الجوال"
            className="input"
            prefix={<PhoneOutlined className="icon-style" rotate={90} />}
          />
        </Form.Item>
        <Form.Item
          label="كلمة السر"
          className="form-item"
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
        <Form.Item>
          <Button block type="primary" htmlType="submit">
            إنشاء حساب
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
Register.propTypes = {};
export default Register;
