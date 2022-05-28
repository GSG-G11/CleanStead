import React, { useContext, useEffect } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import { useAuth } from '../Contexts/userContext';
import { ModalLoginContext } from '../Contexts/ModalLogin';

function UserProtected() {
  const navigate = useNavigate();
  const { userInfo } = useAuth();
  const { setIsOpen } = useContext(ModalLoginContext);

  useEffect(() => {
    if (typeof userInfo === 'string') {
      if (!userInfo.name) {
        navigate('/', { replace: true });
        setIsOpen(true);
      }
    }
  }, []);
  return <Outlet />;
}
export default UserProtected;
