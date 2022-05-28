import React, { useContext, useEffect } from 'react';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import { userContext, useAuth } from '../Contexts/userContext';

function AdminProtected({ children }) {
  // const navigate = useNavigate();
  // const userPromise = new Promise((resolve, reject) => {
  //   const { userInfo } = useContext(userContext);
  //   if (userInfo) resolve(userInfo);
  //   else reject(new Error('no user'));
  // });

  // userPromise
  //   .then((userInfo) => {
  //     if (userInfo.role !== 'admin' || userInfo.role === 'user') {
  //       return navigate('/login/admin', { replace: true });
  //     }
  //     // if (userInfo.role === 'admin') {
  //     //   return navigate('/dashboard', { replace: true });
  //     // }
  //   })
  //   .catch(() => console.log('no user'));

  // const { userInfo } = useContext(userContext);
  // console.log('Admin Protected userInfo', userInfo);
  // if (userInfo.role !== 'admin' || userInfo.role === 'user') {
  //   return <Navigate to="/" />;
  // }

  const { userInfo } = useAuth();
  console.log('Admin Protected userInfo', userInfo);
  if (userInfo?.role !== 'admin' || userInfo?.role === 'user') {
    return <Navigate to="/" replace />;
  }
  return children || <Outlet />;

  // useEffect(() => {
  // console.log('Admin Protected userInfo', typeof userInfo !== 'string');
  // console.log('Admin Protected Before userInfo', userInfo);
  // if (typeof userInfo !== 'string') {
  //   console.log('Admin Protected userInfo', userInfo);
  //   if (!userInfo.role || userInfo.role === 'user') {
  //     navigate('/', { replace: true });
  //   }
  // }
  // console.log('Admin Protected userInfo', userInfo);
  // }, []);
  // return <Outlet />;
}

export default AdminProtected;
