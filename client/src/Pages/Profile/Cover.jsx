import React, { useContext } from 'react';
import { Avatar, Card, Image } from 'antd';
import headerBackground from '../../Assets/images/headerBackground.svg';
import { userContext } from '../../Contexts/userContext';

const { Meta } = Card;

function Cover() {
  const { userInfo } = useContext(userContext);
  return (
    <div className="header-container">
      <div className="cover-image-container">
        <div className="overlay" />
        <Image
          src={headerBackground}
          preview={false}
          className="profile-cover"
          alt="cover"
        />
      </div>
      <Card className="user-card">
        <Meta
          className="user-meta"
          title={userInfo.name}
          description={userInfo.location}
          avatar={
            <Avatar
              className="user-avatar"
              src="https://joeschmoe.io/api/v1/random"
            />
          }
        />
      </Card>
    </div>
  );
}

export default Cover;
