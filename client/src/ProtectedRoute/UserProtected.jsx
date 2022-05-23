/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import { userContext } from '../Contexts/userContext';
import { ModalLoginContext } from '../Contexts/ModalLogin';

function UserProtected() {
  const navigate = useNavigate();
  const { userInfo } = useContext(userContext);
  const { setIsOpen } = useContext(ModalLoginContext);
  console.log(userInfo.name);
  if (userInfo.name === undefined) {
    console.log('no user yet');
    navigate('/', { replace: true });
    setIsOpen(true);
  }
  return <Outlet />;
}
export default UserProtected;
