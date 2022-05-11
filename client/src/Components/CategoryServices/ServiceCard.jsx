import React from 'react';
import PropTypes from 'prop-types';
import { Image, Typography } from 'antd';
import './style.css';

const { Title } = Typography;

export default function ServiceCard({ service }) {
  return (
    <div className="card-box">
      <Image
        className="swiper-lazy"
        src={service.image}
        alt="service"
        preview={false}
      />
      <Title className="card-title" level={4}>
        {service.name}
      </Title>
    </div>
  );
}
ServiceCard.propTypes = {
  service: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};
