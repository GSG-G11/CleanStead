import React, { createContext, useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import jwt_decode from 'jwt-decode';

const userContext = createContext();

function UserProvider({ children }) {
  const [userInfo, setUserInfo] = useState({});
  const [isLogged, setIsLogged] = useState(false);
  const token = document.cookie.split('token=')[1];

  const userData = useMemo(
    () => ({ userInfo, setUserInfo, isLogged, setIsLogged }),
    [userInfo]
  );
  useEffect(() => {
    if (token) {
      setUserInfo(jwt_decode(token));
      setIsLogged(true);
    } else {
      setIsLogged(false);
      setUserInfo({});
    }
  }, [token]);

  return (
    <userContext.Provider value={userData}>{children}</userContext.Provider>
  );
}
UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export { UserProvider, userContext };
