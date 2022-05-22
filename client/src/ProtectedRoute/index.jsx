/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { adminContext } from '../Contexts/adminContext';

function ProtectedRoute() {
  const { adminInfo, isAdminLogged } = useContext(adminContext);
  console.log(isAdminLogged);
  if (!(adminInfo.role === 'admin')) {
    console.log(adminInfo, '1');
    return <Navigate to="/login/admin" replace />;
  }
  console.log(adminInfo, '2');
  return <Outlet />;
}
export default ProtectedRoute;
