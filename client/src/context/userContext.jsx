import React, { createContext, useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const userContext = createContext();

function UserProvider({ children }) {
  const [userInfo, setUserInfo] = useState({});
  const [isLogged, setIsLogged] = useState(false);

  const userData = useMemo(
    () => ({ userInfo, setUserInfo, isLogged, setIsLogged }),
    [userInfo]
  );

  useEffect(() => {
    const cancelTokenSource = axios.CancelToken.source();
    axios
      .get(`/api/v1/cookies`, {
        cancelToken: cancelTokenSource.token,
      })
      .then(({ data: { data } }) => {
        setUserInfo(data);
        setIsLogged(true);
      })
      .catch(() => {
        setIsLogged(false);
        setUserInfo({});
      });
    return () => cancelTokenSource.cancel();
  }, [isLogged]);

  return (
    <userContext.Provider value={userData}>{children}</userContext.Provider>
  );
}
UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export { UserProvider, userContext };
