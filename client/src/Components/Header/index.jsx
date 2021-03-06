import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Image, Typography, Button } from 'antd';
import headerBackground from '../../Assets/images/headerBackground.svg';
import './style.css';

const { Title } = Typography;

function Header() {
  return (
    <Row justify="center" align="middle">
      <Col
        xs={{ span: 23 }}
        sm={{ span: 23 }}
        md={{ span: 23 }}
        lg={{ span: 23 }}
        xl={{ span: 23 }}
      >
        <div className="header-container">
          <Image alt="header image" preview={false} src={headerBackground} />
          <div className="header-description">
            <Title level={2} className="title">
              اختار يلي بخلصك
              <br /> من مرة <span style={{ color: '#8FC930' }}>وحدة</span>
            </Title>
            <Title level={4} type="secondary" className="title">
              ما تشيل هم كلمنا بنساعدك <br />
              احجز خدمة مضمونة بكبسة زر
            </Title>
            <Link to="/contact">
              <Button className="header-button">تواصل معنا</Button>
            </Link>
          </div>
        </div>
      </Col>
    </Row>
  );
}

export default Header;
