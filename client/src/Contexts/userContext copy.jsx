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
import { message } from 'antd';
import axios from 'axios';
import { ModalLoginContext } from './ModalLogin';

const userContext = createContext();
const useAuth = () => useContext(userContext);
function UserProvider({ children }) {
  const [userInfo, setUserInfo] = useState('');
  const [isLogged, setIsLogged] = useState(false);
  const token = document.cookie.split('token=')[1];
  const { setIsOpen } = useContext(ModalLoginContext);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const logout = () => {
    axios
      .get('/api/v1/logout')
      .then(() => {
        setIsLogged(false);
        navigate('/', { replace: true });
        setIsOpen(false);
      })
      .catch(() => {
        message.error('حدث خطأ ما');
      });
  };

  const userData = useMemo(
    () => ({ userInfo, setUserInfo, isLogged, setIsLogged, logout }),
    [userInfo, setUserInfo]
  );
  useEffect(() => {
    if (token) {
      console.log('userInfo', userInfo);
      setUserInfo(jwt_decode(token));
      setIsLogged(true);
      if (userInfo.role === 'admin' && pathname === '/login/admin') {
        navigate('/dashboard', { replace: true });
      }
      if (userInfo.role === 'admin') {
        navigate(pathname, { replace: true });
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
export { UserProvider, userContext, useAuth };
