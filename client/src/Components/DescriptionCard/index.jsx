import React, { useEffect, useState } from 'react';
import { Image, Row, Col } from 'antd';
import Img from '../../Assets/images/img1.png';
import ContactUsForm from './ContactUsForm';
import DescriptionContent from './DescriptionContent';
import './style.css';

function DescriptionCard({ page }) {
  return (
    <Row>
      <Col>
        <Image
          preview={false}
          className="description-image"
          width={450}
          src={Img}
        />
      </Col>
      <Col>
        {page === 'contact' ? <ContactUsForm /> : <DescriptionContent />}
      </Col>
    </Row>
  );
}

export default DescriptionCard;
