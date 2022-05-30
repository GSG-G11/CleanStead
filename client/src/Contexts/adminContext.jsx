/* eslint-disable camelcase */
import React, { createContext, useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import jwt_decode from 'jwt-decode';
import { useNavigate, useLocation } from 'react-router-dom';

const adminContext = createContext();

function AdminProvider({ children }) {
  const navigate = useNavigate();
  const [adminInfo, setAdminInfo] = useState({});
  const [isAdminLogged, setIsAdminLogged] = useState(false);
  const token = document.cookie.split('tokenAdmin=')[1];
  const { pathname } = useLocation();
  const adminData = useMemo(
    () => ({ adminInfo, setAdminInfo, isAdminLogged, setIsAdminLogged }),
    [isAdminLogged, adminInfo]
  );
  useEffect(() => {
    if (token) {
      setAdminInfo(jwt_decode(token));
      if (pathname === '/login/admin') {
        navigate('/dashboard', { replace: true });
      } else {
        navigate(pathname, { replace: true });
      }
    }
  }, [isAdminLogged]);
  return (
    <adminContext.Provider value={adminData}>{children}</adminContext.Provider>
  );
}
AdminProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export { AdminProvider, adminContext };
