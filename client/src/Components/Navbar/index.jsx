import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Layout, Menu, Image, Button, Dropdown, Space, Drawer } from 'antd';
import { DownOutlined, MenuOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';
import logo from '../../Assets/images/logo.svg';
import LeftMenu from './LeftMenu';
import RightMenu from './RightMenu';
import './navbar.css';

const { Header } = Layout;

function Navbar({ isLogged, categories, user = { name: '', role: '' } }) {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const categoriesMenu = () => (
    <Menu
      items={categories.map(({ id, name }) => ({
        key: id,
        label: <Link to={`/category/${id}`}>{name}</Link>,
      }))}
    />
  );

  const navItems = [
    <Link to="/">الرئيسية</Link>,
    categories.length ? (
      <Space direction="vertical">
        <Dropdown overlay={categoriesMenu()} placement="bottom">
          <Space>
            الخدمات
            <DownOutlined style={{ fontSize: '12px' }} />
          </Space>
        </Dropdown>
      </Space>
    ) : (
      <Link to="#category">الخدمات</Link>
    ),
    <Link to="/about">من نحن</Link>,
    <Link to="/contact">اتصل بنا</Link>,
  ].map((item, key) => ({
    key,
    label: item,
  }));

  const logout = () => {
    console.log('Logged out');
  };

  const avatarMenu = (
    <Menu
      items={[
        {
          label:
            user.role === 'admin' ? (
              <Link to="/dashboard">لوحة التحكم</Link>
            ) : (
              <Link to="/my-appointment">مواعيدي</Link>
            ),
        },
        {
          label: 'تسجيل خروج',
          onClick: logout,
          className: 'logout',
        },
      ]}
    />
  );

  return (
    <Header className="menu">
      <div className="menu__logo">
        <Link to="/">
          <Image preview={false} src={logo} width={150} />
        </Link>
      </div>
      <div className="menu_left">
        <LeftMenu mode="horizontal" navItems={navItems} />
      </div>
      <div className="menu_right">
        <RightMenu
          mode="horizontal"
          isLogged={isLogged}
          avatarMenu={avatarMenu}
          user={user}
        />
      </div>
      <Button
        className="menu__mobile-button"
        type="primary"
        onClick={showDrawer}
      >
        <MenuOutlined type="align-right" />
      </Button>
      <Drawer
        title="القائمة"
        placement="left"
        className="menu_drawer"
        onClose={onClose}
        visible={visible}
      >
        <LeftMenu mode="inline" navItems={navItems} />
        <RightMenu
          mode="inline"
          isLogged={isLogged}
          avatarMenu={avatarMenu}
          user={user}
        />
      </Drawer>
    </Header>
  );
}

Navbar.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  user: PropTypes.objectOf(PropTypes.object()),
  categories: PropTypes.arrayOf(PropTypes.oneOfType(PropTypes.object))
    .isRequired,
};

export default Navbar;
