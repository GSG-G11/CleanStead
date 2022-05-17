import React, { createContext, useState, useMemo } from 'react';
import PropTypes from 'prop-types';

const userContext = createContext();

function UserProvider({ children }) {
  const [userInfo, setUserInfo] = useState({});

  const userData = useMemo(() => ({ userInfo, setUserInfo }), [userInfo]);

  return (
    <userContext.Provider value={userData}>{children}</userContext.Provider>
  );
}
UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export { UserProvider, userContext };
