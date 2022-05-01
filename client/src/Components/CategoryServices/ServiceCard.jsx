import React from 'react';
import PropTypes from 'prop-types';
import { Col, Card, Image } from 'antd';

const { Meta } = Card;

export default function ServiceCard({ service }) {
  return (
    <Col
      xs={{ span: 20 }}
      sm={{ span: 12 }}
      md={{ span: 12 }}
      lg={{ span: 8 }}
      xl={{ span: 8 }}
    >
      <Card
        hoverable
        style={{ width: 270 }}
        className="service-card"
        cover={<Image className="service-image" src={service.image} alt="service" />}
      >
        <Meta title={service.name} />
      </Card>
    </Col>
  );
}
ServiceCard.propTypes = {
  service: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    category_id: PropTypes.number.isRequired,
  }).isRequired,
};
