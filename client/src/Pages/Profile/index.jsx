import React, { useContext } from 'react';
import { userContext } from '../../Contexts/userContext';

function Profile() {
  const { userInfo } = useContext(userContext);
  return <div>my profile {userInfo.name}</div>;
}
export default Profile;
