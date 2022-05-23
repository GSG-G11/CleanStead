/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { adminContext } from '../Contexts/adminContext';

function ProtectedRoute() {
  const { adminInfo } = useContext(adminContext);
  if (!(adminInfo.role === 'admin')) {
    return <Navigate to="/login/admin" replace />;
  }
  return <Outlet />;
}
export default ProtectedRoute;
