/* eslint-disable no-undef */
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Menu, Button, Avatar, Dropdown, Space } from 'antd';
import { UserOutlined, DownOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { ModalLoginContext } from '../../Context/ModalLogin';

function RightMenu({ mode, avatarMenu, user }) {
  const { setIsOpen, isLogged } = useContext(ModalLoginContext);
  const openModal = () => {
    setIsOpen(true);
  };
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
          <Button className="login" onClick={openModal}>
            دخول
          </Button>
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
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
  }),
  avatarMenu: PropTypes.element.isRequired,
};

RightMenu.defaultProps = {
  user: { name: '', role: '' },
};

export default RightMenu;
