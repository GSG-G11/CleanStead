/* eslint-disable no-undef */
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Menu, Button, Avatar, Dropdown, Space } from 'antd';
import { UserOutlined, DownOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { ModalLoginContext } from '../../Contexts/ModalLogin';
import { userContext } from '../../Contexts/userContext';

function RightMenu({ mode, avatarMenu }) {
  const { userInfo, isLogged } = useContext(userContext);
  const { setIsOpen } = useContext(ModalLoginContext);

  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <Menu
      mode={mode}
      className="right-menu"
      items={[
        {
          key: 'avatar',
          label: isLogged ? (
            <Space direction="vertical">
              <Dropdown overlay={avatarMenu} placement="bottom">
                <Space>
                  <div className="avatar">
                    <Avatar size={32} icon={<UserOutlined />} />
                    &nbsp;{userInfo.name}&nbsp;
                    <DownOutlined style={{ fontSize: '12px' }} />
                  </div>
                </Space>
              </Dropdown>
            </Space>
          ) : (
            <Button className="login" onClick={openModal}>
              دخول
            </Button>
          ),
        },
        {
          key: 'book',
          label: (
            <Link to="/book">
              <Button type="primary">احجز الآن</Button>
            </Link>
          ),
        },
      ]}
    />
  );
}

RightMenu.propTypes = {
  mode: PropTypes.string.isRequired,
  avatarMenu: PropTypes.element.isRequired,
};

export default RightMenu;
