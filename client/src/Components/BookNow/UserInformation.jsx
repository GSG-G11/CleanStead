import React from 'react';
import PropTypes from 'prop-types';
import { Typography, Form, Space, Input, Button, Row, Col } from 'antd';

const { Title } = Typography;

function UserInformation({ onChangeInput, setIsOpen }) {
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
            <Form.Item label="العنوان">
              <Input
                placeholder="العنوان"
                className="input-user"
                name="userAddress"
                onChange={onChangeInput}
              />
            </Form.Item>
          </Col>
          <Col>
            <Form.Item label="العنوان التفصيلي">
              <Input
                placeholder="العنوان التفصيلي"
                className="input-user"
                name="userSpecificAddress"
                onChange={onChangeInput}
              />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </div>
  );
}

UserInformation.defaultProps = {
  setIsOpen: () => {
    setIsOpen(false);
  },
};

UserInformation.propTypes = {
  onChangeInput: PropTypes.func.isRequired,
  setIsOpen: PropTypes.func,
};

export default UserInformation;
