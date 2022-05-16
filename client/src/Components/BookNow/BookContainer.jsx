import React, { useState } from 'react';
import uuid from 'react-uuid';
import PropTypes from 'prop-types';
import { Col, Row, Steps, Button, message } from 'antd';
import CustomTitle from '../CustomTitle';
import ServicesChoice from './ServicesChoice';
import DateTimeChoice from './DateTimeChoice';
import UserInformation from './UserInformation';
import Summary from './Summary';
import './style.css';

const { Step } = Steps;

function BookContainer({ categories }) {
  const [current, setCurrent] = useState(0);
  const [categoryServices, setCategoryServices] = useState({});
  const [valueRadio, setValueRadio] = useState('مرة واحدة');
  const [valueDate, setValueDate] = useState('لم يتم تحديد موعد بعد');

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const steps = [
    {
      title: 'اختر الخدمات',
      content: (
        <ServicesChoice
          categories={categories}
          categoryServices={categoryServices}
          setCategoryServices={setCategoryServices}
        />
      ),
    },
    {
      title: 'التاريخ والوقت',
      content: (
        <DateTimeChoice
          valueRadio={valueRadio}
          setValueRadio={setValueRadio}
          setValueDate={setValueDate}
        />
      ),
    },
    {
      title: 'معلوماتك',
      content: <UserInformation />,
    },
  ];

  return (
    <div className="book-container">
      <Row justify="center" align="top" gutter={[0, 30]}>
        <Col
          xs={{ span: 22 }}
          sm={{ span: 22 }}
          md={{ span: 15 }}
          lg={{ span: 15 }}
          xl={{ span: 15 }}
        >
          <CustomTitle isLanding={false} title="احجز الآن" />
          <Steps current={current}>
            {steps.map((item) => (
              <Step key={uuid()} title={item.title} />
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
                onClick={() => message.success('تم ارسال الطلب بنجاح!')}
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
          <Summary
            categoryServices={categoryServices}
            valueRadio={valueRadio}
            valueDate={valueDate}
          />
        </Col>
      </Row>
    </div>
  );
}

BookContainer.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
};
export default BookContainer;
