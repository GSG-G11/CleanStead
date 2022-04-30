import React from 'react';
import {
  Row, Col, Image, Typography, Button,
} from 'antd';
import headerBackground from '../../assets/images/headerBackground.svg';
import './style.css';

const { Title } = Typography;

export default function Header() {
  return (
    <Row
      justify="center"
      align="middle"
    >
      <Col
        xs={{ span: 23 }}
        sm={{ span: 23 }}
        md={{ span: 21 }}
        lg={{ span: 20 }}
        xl={{ span: 18 }}
      >
        <div className="header-container">
          <Image
            className="header-image"
            preview={false}
            src={headerBackground}
          />
          <div className="header-description">
            <Title level={2} className="title">
              اختار يلي بخلصك
              <br />
              {' '}
              من مرة
              {' '}
              <span style={{ color: '#8FC930' }}>وحدة</span>
            </Title>
            <Title level={4} type="secondary" className="title">
              ما تشيل هم كلمنا بنساعدك
              {' '}
              <br />
              احجز خدمة مضمونة بكبسة زر
            </Title>
            <Button className="header-button">تواصل معنا</Button>
          </div>
        </div>
      </Col>
    </Row>
  );
}
