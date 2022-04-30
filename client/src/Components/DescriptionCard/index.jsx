import {
  Image, Row, Col, Typography,
} from 'antd';
import React from 'react';
import linesLeft from '../../assets/images/linesLeft.svg';
import './style.css';

const { Title } = Typography;
function DescriptionCard() {
  return (
    <div>
      <Row>
        <Col span={12}>
          <Image
            width={200}
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          />
        </Col>
        <Col span={12}>
          <div className="custom-title">
            <Title className="title">من نحن</Title>
            <Image src={linesLeft} preview={false} />
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default DescriptionCard;
