import React from 'react';
import { Typography, Image } from 'antd';
import PropTypes from 'prop-types';
import linesLeft from '../../Assets/images/linesLeft.svg';
import linesRight from '../../Assets/images/linesRight.svg';
import './style.css';

const { Title } = Typography;

function CustomTitle({ isLanding, title }) {
  return (
    <div className={isLanding ? 'custom-title-center' : 'custom-title-right'}>
      {isLanding && <Image src={linesRight} preview={false} />}
      <Title className="title">{title}</Title>
      <Image src={linesLeft} preview={false} />
    </div>
  );
}
CustomTitle.defaultProps = {
  isLanding: false,
};
CustomTitle.propTypes = {
  isLanding: PropTypes.bool,
  title: PropTypes.string.isRequired,
};
export default CustomTitle;
