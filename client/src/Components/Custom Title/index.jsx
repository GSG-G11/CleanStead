import React from 'react';
import { Typography, Image } from 'antd';
import PropTypes from 'prop-types';
import linesRight from '../../assets/images/linesRight.svg';
import linesLeft from '../../assets/images/linesLeft.svg';

const { Title } = Typography;

function CustomTitle({ isLanding, title }) {
  return (
    <div className="custom-title">
      {isLanding && <Image src={linesRight} preview={false} />}
      <Title className="title">{title}</Title>
      <Image src={linesLeft} preview={false} />
    </div>
  );
}
CustomTitle.propTypes = {
  isLanding: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
};
export default CustomTitle;
