import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { userContext } from '../Contexts/userContext';

function AdminProtected() {
  const userPromise = new Promise((resolve, reject) => {
    const { userInfo } = useContext(userContext);
    if (userInfo) resolve(userInfo);
    else reject(new Error('no user'));
  });

  userPromise
    .then((userInfo) => {
      if (!(userInfo.role === 'admin')) <Navigate to="/login/admin" replace />;
    })
    .catch(() => {});

  return <Outlet />;
}

export default AdminProtected;
