import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import uuid from 'react-uuid';
import { Col, Row, Steps, Button, message, Spin } from 'antd';
import CustomTitle from '../CustomTitle';
import ServicesChoice from './ServicesChoice';
import DateTimeChoice from './DateTimeChoice';
import UserInformation from './UserInformation';
import Summary from './Summary';
import CompleteBook from './CompleteBook';
import cities from '../../cities.json';
import './style.css';
import { userContext } from '../../Contexts/userContext';

const { Step } = Steps;

function BookContainer() {
  const [current, setCurrent] = useState(0);
  const [categoryServices, setCategoryServices] = useState({});
  const [valueRadio, setValueRadio] = useState('مرة واحدة');
  const [valueDate, setValueDate] = useState('');
  const [username, setUserName] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [userAddress, setUserAddress] = useState('');
  const [position, setPosition] = useState([
    31.512646000696368, 34.457782320381796,
  ]);
  //   lat: 31.512646000696368,
  //   lng: 34.457782320381796,
  // });
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { userInfo } = useContext(userContext);

  useEffect(() => {
    if (typeof userInfo !== 'string') {
      const { name, phone, location, lat, lng } = userInfo;
      setUserName(name);
      setUserPhone(phone);
      setUserAddress(location);
      setPosition([parseFloat(lat), parseFloat(lng)]);
      //   lat,
      //   lng,
      // });
    }
  }, [userInfo]);

  const selectedServices = () => {
    let services = [];
    let price = 0;
    if (Object.keys(categoryServices).length) {
      Object.values(categoryServices).forEach((value) => {
        services = [
          ...services,
          ...value.filter((item) => item.isChecked === true),
        ];
      });
    }
    if (services.length) {
      price = services.reduce(
        (acc, curr) => acc + curr.price * curr.quantity,
        0
      );
    }
    return { services, price };
  };

  const showModal = () => {
    if (username === '' || userPhone === '' || userAddress === '') {
      message.error('يجب إدخال جميع البيانات');
    } else {
      const user = {
        name: username,
        phone: userPhone,
        location: userAddress,
        // lat: position.lat,
        // lng: position.lng,
        lat: position[0],
        lng: position[1],
      };
      const dateTime = valueDate;
      const repeat = valueRadio;
      const { services, price } = selectedServices();
      setIsLoading(true);
      axios
        .post('/api/v1/book', { dateTime, price, repeat, services, user })
        .then(() => {
          setIsModalVisible(true);
        })
        .catch(() => {
          message.error('حدث خطأ ما');
        })
        .finally(() => {
          setIsLoading(false);
        });
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
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onChangeSelect = (value) => {
    cities.forEach((city) => {
      if (city.name === value) {
        // setPosition(city.coordinates);
        setPosition([
          parseFloat(city.coordinates.lat),
          parseFloat(city.coordinates.lng),
        ]);
      }
    });
    setUserAddress(value);
  };

  const onChangeInput = ({ target: { name, value } }) => {
    switch (name) {
      case 'username':
        setUserName(value);
        break;
      case 'userPhone':
        setUserPhone(value);
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
      title: 'معلومات صاحب الحجز',
      content: (
        <UserInformation
          onChangeInput={onChangeInput}
          onChangeSelect={onChangeSelect}
          position={position}
          setPosition={setPosition}
        />
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
                {isLoading ? <Spin /> : ''}
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

export default BookContainer;
