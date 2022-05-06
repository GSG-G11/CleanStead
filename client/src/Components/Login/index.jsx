import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
import { MailOutlined, LockOutlined } from '@ant-design/icons';

function Login() {
    const onFinish = ({email,password}) => {
        const userInfoLogin = {email,password}
        console.log('userInfoLogin',userInfoLogin);
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
            prefix={<MailOutlined className="icon-style"/>}
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
