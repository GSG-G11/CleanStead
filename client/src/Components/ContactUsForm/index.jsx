import React from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Image, Col, Row, Select, Typography, Button } from 'antd';
import linesLeft from '../../Assets/images/linesLeft.svg';
import './style.css';
import Img from '../../Assets/images/img1.png';

function ContactUsForm({ categories }) {
  const [form] = Form.useForm();
  const Title = Typography;

  return (
    <Row justify="center" align="center" gutter={[0, 30]}>
      <Col
        xs={{ span: 23 }}
        sm={{ span: 23 }}
        md={{ span: 23 }}
        lg={{ span: 11 }}
        xl={{ span: 11 }}
      >
        <div className="contact-section">
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
            <Form.Item className="contact-label" label="الخدمة">
              <Select className="contact-input" placeholder="اسم الخدمة">
                {categories.map(({ id, name }) => (
                  <Select.Option
                    key={id}
                    to={`/category/${id}`}
                    className="categores-list"
                  >
                    {name}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
            <Row justify="center" align="center" gutter={[0, 30]}>
              <Col span={12}>
                <Form.Item
                  name="name"
                  className="contact-label"
                  label="الاسم"
                  rules={[
                    { required: true, message: '!Please input your name' },
                  ]}
                >
                  <Input placeholder="الاسم" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="number"
                  className="contact-label"
                  label="رقم الجوال"
                  rules={[
                    {
                      required: true,
                      message: '!Please input your phone number',
                    },
                  ]}
                >
                  <Input className="contact-input" placeholder="رقم الجوال" />
                </Form.Item>
              </Col>
            </Row>
            <Form.Item
              name="email"
              className="contact-label"
              label="الايميل"
              rules={[
                {
                  required: true,
                  message: '!Please input your email',
                },
              ]}
            >
              <Input className="contact-input" placeholder="الايميل" />
            </Form.Item>
            <Form.Item
              name="introduction"
              className="contact-label"
              label="الرسالة"
            >
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
              onClick={() => {
                form.resetFields();
              }}
            >
              ارسل
            </Button>
          </Form>
        </div>
      </Col>

      <Col
        xs={{ span: 23 }}
        sm={{ span: 23 }}
        md={{ span: 23 }}
        lg={{ span: 11 }}
        xl={{ span: 11 }}
      >
        <Image
          preview={false}
          className="contact-image"
          width={450}
          src={Img}
        />
      </Col>
    </Row>
  );
}
ContactUsForm.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      description: PropTypes.string,
      image: PropTypes.string,
    })
  ).isRequired,
};
export default ContactUsForm;
