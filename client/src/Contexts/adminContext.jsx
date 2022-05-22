import React, { createContext, useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import jwt_decode from 'jwt-decode';

const adminContext = createContext();

function AdminProvider({ children }) {
  const [adminInfo, setAdminInfo] = useState({});
  const [isAdminLogged, setIsAdminLogged] = useState(false);
  const token = document.cookie.split('tokenAdmin=')[1];

  // const adminData = useMemo(
  //   () => ({ adminInfo, setAdminInfo, isAdminLogged, setIsAdminLogged }),
  //   [isAdminLogged, adminInfo]
  // );
  console.log(isAdminLogged, 'isAdminLogged');
  console.log(adminInfo, 'adminInfo');
  useEffect(() => {
    console.log('test');
    if (token) {
      setAdminInfo(jwt_decode(token));
    }
  }, [token]);
  return (
    <adminContext.Provider
      value={{ adminInfo, setAdminInfo, isAdminLogged, setIsAdminLogged }}
    >
      {children}
    </adminContext.Provider>
  );
}
AdminProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export { AdminProvider, adminContext };
