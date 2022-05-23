import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Typography, Form, Space, Input, Button, Row, Col, Select } from 'antd';
import LeafMap from '../Map';
import { ModalLoginContext } from '../../Contexts/ModalLogin';
import cities from '../../cities.json';

const { Title } = Typography;
const { Option } = Select;
function UserInformation({
  onChangeInput,
  onChangeSelect,
  position,
  setPosition,
}) {
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
            <Form.Item label="الاسم" required>
              <Input
                placeholder="الاسم"
                className="input-user"
                name="username"
                onChange={onChangeInput}
              />
            </Form.Item>
          </Col>
          <Col>
            <Form.Item label="رقم الجوال" required>
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
            <Form.Item label="العنوان" required>
              <Select
                className="input-user"
                placeholder="اختر موقعك"
                onChange={(value) => {
                  onChangeSelect(value);
                }}
              >
                {cities.map(({ id, name }) => (
                  <Option key={id} value={name} />
                ))}
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col xs={{ span: 24 }}>
            <LeafMap position={position} setPosition={setPosition} />
          </Col>
        </Row>
      </Form>
    </div>
  );
}

UserInformation.propTypes = {
  onChangeInput: PropTypes.func.isRequired,
  onChangeSelect: PropTypes.func.isRequired,
  position: PropTypes.shape({
    lat: PropTypes.number,
    lng: PropTypes.number,
  }).isRequired,
  setPosition: PropTypes.func.isRequired,
};

export default UserInformation;
