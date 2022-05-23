import React from 'react';
import PropTypes from 'prop-types';
import { Avatar, Card, Image } from 'antd';
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
        />
      </div>
      <Card className="user-card">
        <Meta
          className="user-meta"
          title={userInfo.name}
          description={userInfo.location}
          avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
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
