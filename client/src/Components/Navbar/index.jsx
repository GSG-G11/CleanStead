import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {
  Layout, Menu, Image, Button, Avatar, Dropdown, Space,
} from 'antd';
import { UserOutlined, DownOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';
import logo from '../../assets/images/logo.svg';
import './navbar.css';

const { Header } = Layout;

export default function Navbar({ isLogged, categories, user }) {
  const categoriesMenu = (
    <Menu
      items={categories.map(({ id, name }) => ({
        key: id,
        label: <Link to={`category/${id}`}>{name}</Link>,
      }))}
    />
  );

  const NavItems = [
    <Link to="/">الرئيسية</Link>,
    <Space direction="vertical">
      <Dropdown overlay={categoriesMenu} placement="bottom">
        <Space>
          الخدمات
          <DownOutlined style={{ fontSize: '12px' }} />
        </Space>
      </Dropdown>
    </Space>,
    <Link to="/about">من نحن</Link>,
    <Link to="/contact">اتصل بنا</Link>,
  ].map((item, key) => ({
    key,
    label: item,
  }));

  const logout = () => {
    axios.get('/logout')
      .then((res) => {
        console.log(res.data);
      });
  };

  const avatarMenu = (
    <Menu
      items={[
        {
          label: user.role === 'admin'
            ? (<Link to="/dashboard">Dashboard</Link>) : (<Link to="/my-appointment">My Appointment</Link>)
          ,
        },
        {
          label: (
            <Button className="logout" onClick={logout}>LogOut</Button>
          ),
        },
      ]}
    />
  );

  return (
    <Header className="header">
      <Image src={logo} width={150} />
      <Menu mode="horizontal" defaultSelectedKeys={NavItems[0]} items={NavItems} />
      <div>
        {isLogged ? (
          <Space direction="vertical">
            <Dropdown overlay={avatarMenu} placement="bottom">
              <Space>
                <div className="avatar">
                  <Avatar size={32} icon={<UserOutlined />} />
                  {user.name}
                  <DownOutlined style={{ fontSize: '12px' }} />
                </div>
              </Space>
            </Dropdown>
          </Space>
        ) : (<Button className="login">دخول</Button>)}
        <Button type="primary">احجز الآن</Button>
      </div>
    </Header>
  );
}

Navbar.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  user: PropTypes.arrayOf(PropTypes.oneOfType(PropTypes.object)).isRequired,
  categories: PropTypes.arrayOf(PropTypes.oneOfType(PropTypes.object)).isRequired,
};
