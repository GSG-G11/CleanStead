import React from 'react';
import {
  Layout,
  Menu,
  Image,
  Space,
  Typography,
  Avatar,
  Button,
  Badge,
} from 'antd';
import { Link, Outlet, useLocation } from 'react-router-dom';
import {
  PieChartOutlined,
  MailOutlined,
  CalendarOutlined,
  AppstoreOutlined,
  ShoppingOutlined,
  LogoutOutlined,
  BellOutlined,
} from '@ant-design/icons';
import './style.css';
import logo from '../../Assets/images/logo.svg';
import user from '../../Assets/images/user.png';

const { Header, Content, Sider } = Layout;
const { Title } = Typography;
function getItem(label, key, icon) {
  return {
    key,
    icon,
    label,
  };
}

const items = [
  getItem(
    <Link to="/dashborad/general">نظرة عامة</Link>,
    '1',
    <PieChartOutlined />
  ),
  getItem(
    <Link to="/dashborad/book">الحجوزات</Link>,
    '2',
    <CalendarOutlined />
  ),
  getItem(<Link to="/dashborad/contact">التواصل</Link>, '3', <MailOutlined />),
  getItem(
    <Link to="/dashborad/services"> التصنيفات</Link>,
    '4',
    <AppstoreOutlined />
  ),
  getItem(
    <Link to="/dashborad/categories"> الخدمات</Link>,
    '5',
    <ShoppingOutlined />
  ),
];
const breadcrumbNameMap = {
  '/dashborad/general': 'نظرة عامة',
  '/dashborad/book': 'الحجوزات',
  '/dashborad/contact': 'التواصل',
  '/dashborad/services': 'التصنيفات',
  '/dashborad/categories': 'الخدمات',
};

function Dashboard() {
  const location = useLocation();

  const pathSnippets = location.pathname.split('/').filter((i) => i);
  const extraBreadcrumbItems = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
    return (
      <span className="title" key={url}>
        {breadcrumbNameMap[url]}
      </span>
    );
  });
  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
      className="page-layout"
    >
      <Sider className="sidebar" width={270}>
        <Image preview={false} src={logo} className="logo-image" />
        <Menu
          theme="light"
          defaultSelectedKeys={['1']}
          mode="inline"
          items={items}
          className="sidebar-menu"
        />
        <Button className="logout-btn" icon={<LogoutOutlined />}>
          تسجيل الخروج
        </Button>
      </Sider>
      <Layout className="site-layout">
        <Header
          className="dashborad-header"
          style={{
            padding: 0,
          }}
        >
          <Title>{extraBreadcrumbItems}</Title>
          <Space>
            <Badge dot>
              <Avatar shape="square" icon={<BellOutlined />} />
            </Badge>
            <Avatar
              src={
                <Image
                  src={user}
                  style={{
                    width: 32,
                    padding: '1px',
                    border: '1px solid #DFE0EB',
                    borderRadius: '50%',
                  }}
                  preview={false}
                />
              }
            />
            <Title level={5}>محمد الهبيل</Title>
          </Space>
        </Header>
        <Content
          style={{
            margin: '0 16px',
          }}
        >
          <div
            className="site-layout-background"
            style={{
              padding: 0,
              minHeight: 360,
            }}
          >
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}

export default Dashboard;
