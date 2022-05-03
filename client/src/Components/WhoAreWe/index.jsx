import { Image, Row, Col, Typography, Button } from 'antd';
import React from 'react';
import linesLeft from '../../Assets/images/linesLeft.svg';
import './style.css';
import Img from '../../Assets/images/img1.png';

const { Title, Paragraph } = Typography;
function WhoAreWe() {
  return (
    <div>
      <Row>
        <Col span={12}>
          <Image preview={false} className="imageWho" width={200} src={Img} />
        </Col>
        <Col span={12}>
          <div className="sectionWho">
            <div className="custom-titleWho">
              <Title className="titleWho">من نحن</Title>
              <Image src={linesLeft} preview={false} />
            </div>
            <Paragraph className="paragraphWho">
              هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد
              هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو
              العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها
              التطبيق. إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص
              العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي
              أخطاء لغوية
            </Paragraph>
            <Button
              className="buttonWho"
              type="primary"
              shape="round"
              size="large"
            >
              تواصل معنا
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default WhoAreWe;
