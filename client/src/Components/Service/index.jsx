import { Image, Row, Col, Typography, Button } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import linesLeft from '../../Assets/images/linesLeft.svg';
import './style.css';
import Img from '../../Assets/images/img1.png';

const { Title, Paragraph } = Typography;

function Service() {
  return (
    <div>
      <Row>
        <Col span={12}>
          <Image
            preview={false}
            className="service-image"
            width={400}
            src={Img}
          />
        </Col>
        <Col span={12}>
          <div className="service-section">
            <div className="custom-title">
              <Title className="title">تنظيف المنازل </Title>
              <Image src={linesLeft} preview={false} />
            </div>
            <Paragraph className="service-paragraph">
              هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد
              هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو
              العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها
              التطبيق. إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص
              العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي
              أخطاء لغوية
            </Paragraph>
            <Link to="/book">
              <Button
                className="service-button"
                type="primary"
                shape="round"
                size="large"
              >
                احجزالان
              </Button>
            </Link>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Service;
