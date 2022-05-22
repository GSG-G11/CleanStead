import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Typography, Form, Space, Input, Button, Row, Col, Select } from 'antd';
import LeafMap from '../Map';
import { ModalLoginContext } from '../../Contexts/ModalLogin';
import cities from '../../cities.json';

const { Title } = Typography;
const { Option } = Select;
function UserInformation({ onChangeInput }) {
  const { setIsOpen } = useContext(ModalLoginContext);
  const openLogin = () => {
    setIsOpen(true);
  };

  return (
    <div>
      <Space>
        <Title level={4}>ادخل معلوماتك</Title>
        <Button type="text" className="btn-login" onClick={openLogin}>
          تسجيل الدخول
        </Button>
      </Space>
      <Form layout="vertical">
        <Row>
          <Col>
            <Form.Item label="الاسم">
              <Input
                placeholder="الاسم"
                className="input-user"
                name="username"
                onChange={onChangeInput}
              />
            </Form.Item>
          </Col>
          <Col>
            <Form.Item label="رقم الجوال">
              <Input
                placeholder="رقم الجوال"
                className="input-user"
                name="userPhone"
                onChange={onChangeInput}
              />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col>
            {/* <Form.Item label="العنوان">
              <Input
                placeholder="العنوان"
                className="input-user"
                name="userAddress"
                onChange={onChangeInput}
              />
            </Form.Item> */}
            <Form.Item label="العنوان" name="location" className="input-user">
              <Select placeholder="اختر موقعك">
                {cities.map(({ name, id }) => (
                  <Option key={id} value={name} />
                ))}
              </Select>
            </Form.Item>
          </Col>
          {/* <Col>
            <Form.Item label="العنوان التفصيلي">
              <Input
                placeholder="العنوان التفصيلي"
                className="input-user"
                name="userSpecificAddress"
                onChange={onChangeInput}
              />
            </Form.Item>
          </Col> */}
        </Row>
        <Row>
          <Col xs={{ span: 24 }}>
            <LeafMap />
          </Col>
        </Row>
      </Form>
    </div>
  );
}

UserInformation.propTypes = {
  onChangeInput: PropTypes.func.isRequired,
};

export default UserInformation;
