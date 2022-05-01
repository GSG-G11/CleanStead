import React from 'react';
import {
  Form, Input, Image, Col, Row, Select, Typography, Button,
} from 'antd';
import Img from '../../assets/images/img1.png';
import linesLeft from '../../assets/images/linesLeft.svg';
import './style.css';

function ContactUs() {
  const [form] = Form.useForm();
  const Title = Typography;

  return (
    <div>
      <Row>
        <Col span={12}>
          <Image preview={false} className="image" width={200} src={Img} />
        </Col>
        <Col span={12}>
          <div className="section">
            <div className="custom-title">
              <Image src={linesLeft} preview={false} />
              <Title className="title">تواصل معنا </Title>
            </div>
            <Form form={form} className="form" layout="vertical" autoComplete="off">
              <Form.Item label="الخدمة">
                <Select className="input" placeholder="اسم الخدمة">
                  <Select.Option value="demo">تنظيف المنازل</Select.Option>
                </Select>
              </Form.Item>
              <Row>
                <Col span={12}>
                  <Form.Item name="name" className="name" label="الاسم">
                    <Input className="input" placeholder="الاسم" />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item name="age" className="age" label="رقم الجوال">
                    <Input className="input" placeholder="رقم الجوال" />
                  </Form.Item>
                </Col>
              </Row>
              <Form.Item name="introduction" label="الرسالة">
                <Input.TextArea className="input" placeholder="اكتب رسالتك هنا.." />
              </Form.Item>
              <Button className="button" type="primary" shape="round" size="large"> تواصل معنا</Button>
            </Form>

          </div>
        </Col>
      </Row>
    </div>
  );
}

export default ContactUs;
