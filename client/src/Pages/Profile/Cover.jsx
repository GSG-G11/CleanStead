import React from 'react';
import PropTypes from 'prop-types';
import { Avatar, Card, Image } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import userProfile from '../../Assets/images/userProfile.png';
import headerBackground from '../../Assets/images/headerBackground.svg';

const { Meta } = Card;

function Cover({ userInfo }) {
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
            <Avatar size={64} className="user-avatar" icon={<UserOutlined />} />
          }
        />
      </Card>
    </div>
  );
}
Cover.propTypes = {
  userInfo: PropTypes.shape({
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
  }).isRequired,
};
export default Cover;
