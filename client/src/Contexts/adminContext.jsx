import React, { createContext, useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import jwt_decode from 'jwt-decode';

const adminContext = createContext();

function AdminProvider({ children }) {
  const [adminInfo, setAdminInfo] = useState({});
  const token = document.cookie.split('tokenAdmin=')[1];

  const adminData = useMemo(() => ({ adminInfo, setAdminInfo }), [adminInfo]);
  useEffect(() => {
    if (token) {
      setAdminInfo(jwt_decode(token));
    } else {
      setAdminInfo({});
    }
  }, [token]);

  return (
    <adminContext.Provider value={adminData}>{children}</adminContext.Provider>
  );
}
AdminProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export { AdminProvider, adminContext };
