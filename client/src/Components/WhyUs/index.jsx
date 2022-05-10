import React from 'react';
import 'antd/dist/antd.css';
import { Comment, Image, Row, Col, Typography } from 'antd';
import CustomTitle from '../CustomTitle';
import img from '../../Assets/images/img.png';
import support from '../../Assets/images/support.png';
import discounts from '../../Assets/images/discounts.png';
import Reservation from '../../Assets/images/Reservation.png';
import reliability from '../../Assets/images/reliability.png';
import './WhyUs.css';

const { Title } = Typography;
function WhyUs() {
  return (
    <div className="container">
      <CustomTitle title="الخدمات التي نقدمها" isLanding />

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
            avatar={reliability}
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
            avatar={Reservation}
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
            avatar={discounts}
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
            avatar={support}
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
