import React, { useContext, useEffect } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import { userContext } from '../Contexts/userContext';
import { ModalLoginContext } from '../Contexts/ModalLogin';

function UserProtected() {
  const navigate = useNavigate();
  const { userInfo } = useContext(userContext);
  const { setIsOpen } = useContext(ModalLoginContext);
  useEffect(() => {
    if (!userInfo.name) {
      navigate('/', { replace: true });
      setIsOpen(true);
    }
  }, []);
  return <Outlet />;
}
export default UserProtected;
