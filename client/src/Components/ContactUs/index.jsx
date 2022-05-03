import React from 'react';
import { Form, Input, Image, Col, Row, Select, Typography, Button } from 'antd';
import Img from '../../Assets/images/img1.png';
import linesLeft from '../../Assets/images/linesLeft.svg';
import './style.css';

function ContactUs() {
  const [form] = Form.useForm();
  const Title = Typography;

  return (
    <div>
      <Row>
        <Col span={12}>
          <Image
            preview={false}
            className="contact-image"
            width={500}
            src={Img}
          />
        </Col>
        <Col span={12}>
          <div className="section">
            <div className="contact-custom-title">
              <Title className="contact-title">تواصل معنا </Title>
              <Image className="imageline" src={linesLeft} preview={false} />
            </div>
            <Form
              form={form}
              className="contact-form"
              layout="vertical"
              autoComplete="off"
            >
              <Form.Item label="الخدمة">
                <Select className="contact-input" placeholder="اسم الخدمة">
                  <Select.Option value="demo">تنظيف المنازل</Select.Option>
                </Select>
              </Form.Item>
              <Row>
                <Col span={12}>
                  <Form.Item
                    name="name"
                    className="contact-input"
                    label="الاسم"
                  >
                    <Input className="contact-name" placeholder="الاسم" />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    name="number"
                    className="number"
                    label="رقم الجوال"
                  >
                    <Input className="number" placeholder="رقم الجوال" />
                  </Form.Item>
                </Col>
              </Row>
              <Form.Item name="email" className="contact-input" label="الايميل">
                <Input className="contact-input" placeholder="الايميل" />
              </Form.Item>
              <Form.Item name="introduction" label="الرسالة">
                <Input.TextArea
                  className="contact-input"
                  placeholder="اكتب رسالتك هنا.."
                />
              </Form.Item>
              <Button
                className="contact-button"
                type="primary"
                shape="round"
                size="large"
              >
                تواصل معنا
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default ContactUs;
