import React from 'react';
import 'antd/dist/antd.css';
import {
  Comment, Avatar, Image, Row, Col,
} from 'antd';
import img from '../../assets/images/img.png';
import logo1 from '../../assets/images/logo1.png';
import logo2 from '../../assets/images/logo2.png';
import logo3 from '../../assets/images/logo3.png';
import logo4 from '../../assets/images/logo4.png';
import './WhyUs.css';

function Demo() {
  return (
    <div>
      <Row>
        <Col span={12}>
          <div className="section">
            <Comment
              author={<a className="title">الموثوقية</a>}
              avatar={<Avatar className="avatar" src={logo4} alt="Han Solo" />}
              content={<p className="description">ندرك صعوبة القيام بتنظيف السجاد من قبل النساء</p>}
            />
          </div>
          <div className="section">
            <Comment
              author={<a className="title">الحجز اونلاين</a>}
              avatar={<Avatar className="avatar" src={logo3} alt="Han Solo" />}
              content={<p className="description">ندرك صعوبة القيام بتنظيف السجاد من قبل النساء</p>}
            />
          </div>
          <div className="section">
            <Comment
              author={<a className="title">خصومات دائمة</a>}
              avatar={<Avatar className="avatar" src={logo2} alt="Han Solo" />}
              content={<p className="description">ندرك صعوبة القيام بتنظيف السجاد من قبل النساء</p>}
            />
          </div>
          <div className="section">
            <Comment
              author={<a className="title">دعم متواصل</a>}
              avatar={<Avatar className="avatar" src={logo1} alt="Han Solo" />}
              content={<p className="description">ندرك صعوبة القيام بتنظيف السجاد من قبل النساء</p>}
            />
          </div>
        </Col>
        <Col span={12}>
          <div>
            <Image className="image" width={200} src={img} preview={false} />
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Demo;
