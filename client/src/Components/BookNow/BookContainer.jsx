import React, { useState } from 'react';
import uuid from 'react-uuid';
import PropTypes from 'prop-types';
import { Col, Row, Steps, Button, message } from 'antd';
import { Navigate } from 'react-router-dom';
import CustomTitle from '../CustomTitle';
import ServicesChoice from './ServicesChoice';
import DateTimeChoice from './DateTimeChoice';
import UserInformation from './UserInformation';
import Summary from './Summary';
import CompleteBook from './CompleteBook';
import './style.css';

const { Step } = Steps;

function BookContainer({ categories, setIsOpen }) {
  const [current, setCurrent] = useState(0);
  const [categoryServices, setCategoryServices] = useState({});
  const [valueRadio, setValueRadio] = useState('مرة واحدة');
  const [valueDate, setValueDate] = useState('');
  const [username, setUserName] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [userAddress, setUserAddress] = useState('');
  const [userSpesificAddress, setUserSpecificAddress] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);

  // console.log(categoryServices);
  const showModal = () => {
    if (
      username === '' ||
      userPhone === '' ||
      userAddress === '' ||
      userSpesificAddress === ''
    ) {
      message.error('يجب إدخال جميع البيانات');
    } else {
      setIsModalVisible(true);
    }
  };

  const handleOk = () => {
    setCurrent(0);
    setCategoryServices({});
    setValueRadio('مرة واحدة');
    setValueDate('');
    setUserName('');
    setUserPhone('');
    setUserAddress('');
    setUserSpecificAddress('');
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onChangeInput = ({ target: { name, value } }) => {
    switch (name) {
      case 'username':
        setUserName(value);
        break;
      case 'userPhone':
        setUserPhone(value);
        break;
      case 'userAddress':
        setUserAddress(value);
        break;
      case 'userSpecificAddress':
        setUserSpecificAddress(value);
        break;
      default:
        break;
    }
  };
  const checkServices = () => {
    let checkedTrue = false;
    if (Object.keys(categoryServices).length) {
      Object.values(categoryServices).forEach((value) => {
        checkedTrue =
          value.filter((item) => item.isChecked === true).length !== 0;
      });
      return checkedTrue;
    }
    return checkedTrue;
  };

  const next = () => {
    if (current === 0) {
      if (checkServices()) setCurrent(current + 1);
      else message.error('يجب إختيار خدمة');
    }
    if (current === 1) {
      if (valueDate === '') message.error('يرجى اختيار التاريخ');
      else setCurrent(current + 1);
    }
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
          valueDate={valueDate}
          valueRadio={valueRadio}
          setValueRadio={setValueRadio}
          setValueDate={setValueDate}
        />
      ),
    },
    {
      title: 'معلوماتك',
      content: (
        <UserInformation onChangeInput={onChangeInput} setIsOpen={setIsOpen} />
      ),
    },
  ];

  return (
    <div className="book-container">
      <CompleteBook
        handleOk={handleOk}
        handleCancel={handleCancel}
        isModalVisible={isModalVisible}
      />
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
              <Button type="primary" onClick={showModal}>
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
BookContainer.defaultProps = {
  setIsOpen: () => {
    setIsOpen(false);
  },
};
BookContainer.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
  setIsOpen: PropTypes.func,
};
export default BookContainer;
