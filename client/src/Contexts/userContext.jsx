import React, { createContext, useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import jwt_decode from 'jwt-decode';
import { useLocation, useNavigate } from 'react-router-dom';

const userContext = createContext();

function UserProvider({ children }) {
  const [userInfo, setUserInfo] = useState({});
  const [isLogged, setIsLogged] = useState(false);
  const token = document.cookie.split('token=')[1];
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const userData = useMemo(
    () => ({ userInfo, setUserInfo, isLogged, setIsLogged }),
    [userInfo]
  );
  useEffect(() => {
    if (token) {
      setUserInfo(jwt_decode(token));
      setIsLogged(true);
      if (pathname === '/profile') navigate('/profile', { replace: true });
    } else {
      setIsLogged(false);
      setUserInfo({});
    }
  }, [isLogged]);

  return (
    <userContext.Provider value={userData}>{children}</userContext.Provider>
  );
}
UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export { UserProvider, userContext };
