import React from 'react';
import 'antd/dist/antd.css';
import { Comment, Image, Row, Col, Typography } from 'antd';
import img from '../../Assets/images/img.png';
import logo1 from '../../Assets/images/logo1.png';
import logo2 from '../../Assets/images/logo2.png';
import logo3 from '../../Assets/images/logo3.png';
import logo4 from '../../Assets/images/logo4.png';
import './WhyUs.css';

const { Title } = Typography;
function WhyUs() {
  return (
    <div className="container">
      <Row>
        <Col xs={0} sm={0} md={1} lg={2} xl={4} xxl={6} />
        <Col xs={24} sm={24} md={11} lg={10} xl={8} xxl={6}>
          <Image
            className="imagewhy"
            src={img}
            preview={false}
            alt="A picture showing man and woman"
          />
        </Col>
        <Col
          xs={24}
          sm={24}
          md={11}
          lg={10}
          xl={10}
          xxl={8}
          className="section"
        >
          <Comment
            author={
              <Title level={3} className="comment--title">
                الموثوقية
              </Title>
            }
            avatar={logo4}
            content={
              <p className="comment--description">
                نستحق الثقة منكم والتجربة خير برهان
              </p>
            }
          />
          <Comment
            author={
              <Title level={3} className="comment--title">
                الحجز أونلاين
              </Title>
            }
            avatar={logo3}
            content={
              <p className="comment--description">
                الطريقة سهلة للحجز والتحقق من الحجز والتأكد من حجزكم
              </p>
            }
          />
          <Comment
            author={
              <Title level={3} className="comment--title">
                خصومات دائمة
              </Title>
            }
            avatar={logo2}
            content={
              <p className="comment--description">
                نسعى دائما لراحتكم وتوفير افضل الخصومات لكم
              </p>
            }
          />
          <Comment
            author={
              <Title level={3} className="comment--title">
                دعم متواصل
              </Title>
            }
            avatar={logo1}
            content={
              <p className="comment--description">
                دائما موجودين للرد على استفسارتكم والتواصل معنا
              </p>
            }
          />
        </Col>
        <Col xs={0} sm={0} md={1} lg={2} xl={2} xxl={6} />
      </Row>
    </div>
  );
}

export default WhyUs;
