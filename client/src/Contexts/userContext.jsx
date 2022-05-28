/* eslint-disable camelcase */
import React, { createContext, useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import jwt_decode from 'jwt-decode';
import { useLocation, useNavigate } from 'react-router-dom';
import { message } from 'antd';
import axios from 'axios';
import { ModalLoginContext } from './ModalLogin';

const AuthContext = createContext();

const useAuth = () => useContext(AuthContext);

function useProvideAuth() {
  const [userInfo, setUserInfo] = useState('');
  const [isLogged, setIsLogged] = useState(false);
  const [isloading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const token = document.cookie.split('token=')[1];
  const { setIsOpen } = useContext(ModalLoginContext);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const register = ({ name, email, phone, password, locationDetails }) => {
    axios
      .post('/api/v1/signup', { name, email, phone, password, locationDetails })
      .then(() => {
        setIsLoading(false);
        setIsOpen(false);
        setIsLogged(true);
      })
      .catch((err) => {
        if (err.response) {
          setErrorEmail('الإيميل موجود مسبقاً');
          setIsLoading(false);
        } else {
          message.error('حدث خطأ ما');
          setIsLoading(false);
        }
      });
  };

  const login = ({ email, password }) => {
    setIsLoading(true);
    setError('');
    axios
      .post('/api/v1/signin', { email, password })
      .then(({ data }) => {
        if (data.data === 'admin') {
          navigate('/dashboard', { replace: true });
        }
        setIsLoading(false);
        setIsOpen(false);
        setIsLogged(true);
      })
      .catch((err) => {
        if (err.response) {
          setError('يوجد خطأ بالإيميل أو كلمة السر');
          setIsLoading(false);
        } else {
          message.error('حدث خطأ ما');
          setIsLoading(false);
        }
      });
  };

  const logout = () => {
    axios
      .get('/api/v1/logout')
      .then(() => {
        setIsLogged(false);
        setUserInfo('');
        navigate('/', { replace: true });
        // setIsOpen(false);
      })
      .catch(() => {
        message.error('حدث خطأ ما');
      });
  };

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

  return {
    userInfo,
    register,
    logout,
    login,
    errorEmail,
    error,
    isLogged,
    isloading,
  };
}

function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

ProvideAuth.propTypes = {
  children: PropTypes.node.isRequired,
};

export { ProvideAuth, useAuth };
