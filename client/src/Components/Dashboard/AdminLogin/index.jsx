import React from 'react';
import { Image } from 'antd';
import Login from '../../Login';
import logo from '../../../Assets/images/logo.svg';
import './style.css';

function AdminLogin() {
  return (
    <div className="admin-login">
      <Image
        preview={false}
        src={logo}
        width={150}
        style={{ marginBottom: '60px' }}
      />
      <Login style={{ width: '300px' }} admin />
    </div>
  );
}
export default AdminLogin;
