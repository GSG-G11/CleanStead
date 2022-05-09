import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Col,
  Row,
  Steps,
  Button,
  message,
  Divider,
  Typography,
  Space,
} from 'antd';
import CustomTitle from '../CustomTitle';
import ServicesChoice from './ServicesChoice';
import DateTimeChoice from './DateTimeChoice';
import UserInformation from './UserInformation';
import './style.css';

const { Title, Text } = Typography;
const { Step } = Steps;

function BookContainer({ categories }) {
  const steps = [
    {
      title: 'اختر الخدمات',
      content: <ServicesChoice categories={categories} />,
    },
    {
      title: 'التاريخ والوقت',
      content: <DateTimeChoice />,
    },
    {
      title: 'معلوماتك',
      content: <UserInformation />,
    },
  ];
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  return (
    <div className="book-container">
      <CustomTitle isLanding={false} title="احجز الآن" />
      <Row justify="center" align="top" gutter={[0, 30]}>
        <Col
          xs={{ span: 22 }}
          sm={{ span: 22 }}
          md={{ span: 15 }}
          lg={{ span: 15 }}
          xl={{ span: 15 }}
        >
          <Steps current={current}>
            {steps.map((item) => (
              <Step key={item.title} title={item.title} />
            ))}
          </Steps>
          <div className="steps-content">{steps[current].content}</div>
          <div className="steps-action">
            {current < steps.length - 1 && (
              <Button type="primary" onClick={() => next()}>
                استمرار
              </Button>
            )}
            {current === steps.length - 1 && (
              <Button
                type="primary"
                onClick={() => message.success('Processing complete!')}
              >
                ارسال
              </Button>
            )}
            {current > 0 && (
              <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
                رجوع
              </Button>
            )}
          </div>
        </Col>
        <Col
          xs={{ span: 22 }}
          sm={{ span: 22 }}
          md={{ span: 7 }}
          lg={{ span: 7 }}
          xl={{ span: 7 }}
        >
          <div className="summary">
            <Divider>ملخص</Divider>
            <Space
              direction="vertical"
              size="middle"
              style={{ display: 'flex' }}
            >
              <div>
                <Title type="secondary" className="summary-title" level={5}>
                  الخدمة
                </Title>
                <Text strong>تنظيف المنزل</Text>
              </div>
              <div>
                <Title type="secondary" className="summary-title" level={5}>
                  العناصر المختارة
                </Title>
                <ul>
                  <li>واحد</li>
                  <li>اثنين</li>
                </ul>
              </div>
              <div>
                <Title type="secondary" className="summary-title" level={5}>
                  إجمالي السعر
                </Title>
                <Text strong>20 &#36;</Text>
              </div>
            </Space>
          </div>
        </Col>
      </Row>
    </div>
  );
}

BookContainer.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      description: PropTypes.string,
      image: PropTypes.string,
    })
  ).isRequired,
};
export default BookContainer;
