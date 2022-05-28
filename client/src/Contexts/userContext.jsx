/* eslint-disable camelcase */
import React, {
  createContext,
  useState,
  useEffect,
  useMemo,
  useContext,
} from 'react';
import PropTypes from 'prop-types';
import jwt_decode from 'jwt-decode';
import { useLocation, useNavigate } from 'react-router-dom';
import { ModalLoginContext } from './ModalLogin';

const userContext = createContext();

function UserProvider({ children }) {
  const [userInfo, setUserInfo] = useState('');
  const [isLogged, setIsLogged] = useState(false);
  const token = document.cookie.split('token=')[1];
  const { setIsOpen } = useContext(ModalLoginContext);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const userData = useMemo(
    () => ({ userInfo, setUserInfo, isLogged, setIsLogged }),
    [userInfo, setUserInfo]
  );
  useEffect(() => {
    if (token) {
      setUserInfo(jwt_decode(token));
      setIsLogged(true);
      if (userInfo.role === 'admin' && pathname === '/login/admin') {
        navigate('/dashboard', { replace: true });
      }
      if (pathname === '/profile' || pathname === '/book') {
        navigate(pathname, { replace: true });
        setIsOpen(false);
      }
    } else {
      setIsLogged(false);
      setUserInfo('');
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
