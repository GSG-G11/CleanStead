import { Image, Row, Col, Typography, Button } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import linesLeft from '../../Assets/images/linesLeft.svg';
import './style.css';
import Img from '../../Assets/images/img1.png';

const { Title, Paragraph } = Typography;
function WhoAreWe() {
  return (
    <div>
      <Row>
        <Col span={12}>
          <Image preview={false} className="Who-image" width={400} src={Img} />
        </Col>
        <Col width={400} span={12}>
          <div className="who-section">
            <div className="who-custom-title">
              <Title className="who-title">من نحن</Title>
              <Image className="Who-line" src={linesLeft} preview={false} />
            </div>
            <Paragraph className="who-paragraph">
              هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد
              هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو
              العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها
              التطبيق. إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص
              العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي
              أخطاء لغوية
            </Paragraph>
            <Link to="/contact">
              <Button
                className="who-button"
                type="primary"
                shape="round"
                size="large"
              >
                تواصل معنا
              </Button>
            </Link>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default WhoAreWe;
