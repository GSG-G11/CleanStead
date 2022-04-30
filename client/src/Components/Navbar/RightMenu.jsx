import React from 'react';
import PropTypes from 'prop-types';
import { Menu, Button, Avatar, Dropdown, Space } from 'antd';
import { UserOutlined, DownOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

function RightMenu({ isLogged, mode, avatarMenu, user }) {
  return (
    <Menu mode={mode}>
      <Menu.Item key="avatar">
        {isLogged ? (
          <Space direction="vertical">
            <Dropdown overlay={avatarMenu} placement="bottom">
              <Space>
                <div className="avatar">
                  <Avatar size={32} icon={<UserOutlined />} />
                  &nbsp;{user.name}&nbsp;
                  <DownOutlined style={{ fontSize: '12px' }} />
                </div>
              </Space>
            </Dropdown>
          </Space>
        ) : (
          <Button className="login">دخول</Button>
        )}
      </Menu.Item>
      <Menu.Item key="book">
        <Link to="/book">
          <Button type="primary">احجز الآن</Button>
        </Link>
      </Menu.Item>
    </Menu>
  );
}

RightMenu.propTypes = {
  mode: PropTypes.string.isRequired,
  isLogged: PropTypes.bool.isRequired,
  user: PropTypes.arrayOf(PropTypes.oneOfType(PropTypes.object)).isRequired,
  avatarMenu: PropTypes.element.isRequired,
};

export default RightMenu;
