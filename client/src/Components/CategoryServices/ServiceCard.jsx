import React from 'react';
import PropTypes from 'prop-types';
import { Col, Card, Image } from 'antd';
import './style.css';

const { Meta } = Card;

export default function ServiceCard({ service }) {
  return (
    <Col
      xs={{ span: 24 }}
      sm={{ span: 12 }}
      md={{ span: 12 }}
      lg={{ span: 8 }}
      xl={{ span: 8 }}
    >
      <Card
        hoverable
        style={{ maxWidth: 320 }}
        className="service-card"
        cover={
          <Image className="service-image" src={service.image} alt="service" />
        }
      >
        <Meta title={service.name} />
      </Card>
    </Col>
  );
}
ServiceCard.propTypes = {
  service: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};
