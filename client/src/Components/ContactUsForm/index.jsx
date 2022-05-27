import React, { useContext, useState } from 'react';
import axios from 'axios';
import {
  Form,
  Input,
  Image,
  Col,
  Row,
  Select,
  Typography,
  Button,
  message,
  Spin,
} from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import linesLeft from '../../Assets/images/linesLeft.svg';
import './style.css';
import Img from '../../Assets/images/img1.png';
import { CategoriesContext } from '../../Contexts/CategoriesContext';

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

function ContactUsForm() {
  const { categories } = useContext(CategoriesContext);
  const [form] = Form.useForm();
  const Title = Typography;
  const [error, setError] = useState('');
  const [isloading, setIsLoading] = useState(false);
  const onFinish = ({ name, email, phone, messageInfo, categoryId }) => {
    setError('');
    setIsLoading(true);
    axios
      .post('/api/v1/contact', { name, email, phone, messageInfo, categoryId })
      .then(() => {
        message.success('سوف يتم التواصل معك قريبا');
        setIsLoading(false);
      })
      .catch((err) => {
        if (err.response) {
          setError('حاول مرة أخرى');
          setIsLoading(false);
        } else {
          message.error('حدث خطأ ما');
        }
      });
  };

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
            onFinish={onFinish}
          >
            <Form.Item
              className="contact-label"
              label="الخدمة"
              name="categoryId"
              rules={[
                {
                  required: true,
                  message: ' يجب اختيار الخدمة المراد الاستفسار بخصوصها',
                },
              ]}
              hasFeedback
            >
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
                  rules={[{ required: true, message: 'اسم المستخدم مطلوب' }]}
                  hasFeedback
                >
                  <Input placeholder="الاسم" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="phone"
                  className="contact-label"
                  label="رقم الجوال"
                  rules={[
                    {
                      required: true,
                      message: 'رقم جوال المستخدم مطلوب',
                    },
                    {
                      min: 10,
                      message: 'يجب ادخال رقم جوال  على الاقل 10 أرقام',
                    },
                  ]}
                  hasFeedback
                >
                  <Input
                    type="tel"
                    className="contact-input"
                    placeholder="رقم الجوال"
                  />
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
                  message: 'إيميل المستخدم مطلوب',
                },
                { type: 'email', message: 'يجب ادخال إيميل صحيح' },
              ]}
              hasFeedback
            >
              <Input className="contact-input" placeholder="الايميل" />
            </Form.Item>
            <Form.Item
              name="messageInfo"
              className="contact-label "
              label="الرسالة"
              rules={[
                {
                  required: true,
                  message: 'رسالة المستخدم مطلوبة',
                },
              ]}
              hasFeedback
            >
              <Input.TextArea
                className="contact-input text-area"
                placeholder="اكتب رسالتك هنا.."
              />
            </Form.Item>
            {error && <span className="error">{error}</span>}
            {isloading && <Spin indicator={antIcon} />}
            <Button
              className="contact-button"
              type="primary"
              htmlType="submit"
              shape="round"
              size="large"
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
          alt="contact"
        />
      </Col>
    </Row>
  );
}

export default ContactUsForm;
