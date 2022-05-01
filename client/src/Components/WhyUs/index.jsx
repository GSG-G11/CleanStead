import React from 'react';
import 'antd/dist/antd.css';
import { Comment, Avatar, Image, Row, Col, Typography } from 'antd';
import img from '../../Assets/images/img.png';
import logo1 from '../../Assets/images/logo1.png';
import logo2 from '../../Assets/images/logo2.png';
import logo3 from '../../Assets/images/logo3.png';
import logo4 from '../../Assets/images/logo4.png';
import './WhyUs.css';

const { Title } = Typography;
function WhyUs() {
  return (
    <div>
      <Row>
        <Col span={12}>
          <div className="section">
            <Comment
              author={<Title className="titlewhy"> الموثوقية</Title>}
              avatar={<Avatar className="avatar" src={logo4} alt="Han Solo" />}
              content={
                <p className="descriptionwhy">
                  ندرك صعوبة القيام بتنظيف السجاد من قبل النساء
                </p>
              }
            />
          </div>
          <div className="section">
            <Comment
              author={<Title className="mostafa">الحجز اونلاين</Title>}
              avatar={<Avatar className="avatar" src={logo3} alt="Han Solo" />}
              content={
                <p className="descriptionwhy">
                  ندرك صعوبة القيام بتنظيف السجاد من قبل النساء
                </p>
              }
            />
          </div>
          <div className="section">
            <Comment
              author={<Title className="titlewhy">خصومات دائمة</Title>}
              avatar={<Avatar className="avatar" src={logo2} alt="Han Solo" />}
              content={
                <p className="descriptionwhy">
                  ندرك صعوبة القيام بتنظيف السجاد من قبل النساء
                </p>
              }
            />
          </div>
          <div className="section">
            <Comment
              author={<Title className="titlewhy">دعم متواصل</Title>}
              avatar={<Avatar className="avatar" src={logo1} alt="Han Solo" />}
              content={
                <p className="descriptionwhy">
                  ندرك صعوبة القيام بتنظيف السجاد من قبل النساء
                </p>
              }
            />
          </div>
        </Col>
        <Col span={12}>
          <div>
            <Image className="imagewhy" src={img} preview={false} />
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default WhyUs;
