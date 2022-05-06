import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
import { MailOutlined, LockOutlined } from '@ant-design/icons';
// import PropTypes from 'prop-types';
import './style.css';

function Login() {
    const onFinish = (values) => {
        console.log(values);
      };
  return (
    <div>
      <Form layout="vertical" onFinish={onFinish}>
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
            prefix={<MailOutlined className="icon-style"/>}
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
            prefix={<LockOutlined className="icon-style" />}
            
          />
        </Form.Item>
        <Form.Item>
          <Button block type="primary"  htmlType="submit" >
            دخول
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
Login.propTypes = {};
export default Login;
