import React from 'react';
import PropTypes from 'prop-types';
import { Menu } from 'antd';

function LeftMenu({ mode, navItems }) {
  return (
    <Menu
      mode={mode}
      defaultSelectedKeys={navItems[0]}
      items={navItems}
      className="menu_left__items"
    />
  );
}

LeftMenu.propTypes = {
  mode: PropTypes.string.isRequired,
  navItems: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default LeftMenu;
