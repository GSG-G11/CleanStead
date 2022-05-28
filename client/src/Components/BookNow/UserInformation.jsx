import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Typography, Form, Input, Row, Col, Select } from 'antd';
import LeafMap from '../Map';
import cities from '../../cities.json';
import { useAuth } from '../../Contexts/userContext';

const { Title } = Typography;
const { Option } = Select;
function UserInformation({
  onChangeInput,
  onChangeSelect,
  position,
  setPosition,
}) {
  const { userInfo } = useAuth();

  return (
    <div>
      <Title level={4}>ادخل المعلومات</Title>
      <Form layout="vertical">
        <Row>
          <Col>
            <Form.Item label="الاسم" required>
              <Input
                placeholder="الاسم"
                className="input-user"
                name="username"
                defaultValue={userInfo.name || ''}
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
                defaultValue={userInfo.phone || ''}
                onChange={onChangeInput}
              />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Item label="عنوان المكان الذي تريد تنظيفه" required>
              <Select
                className="input-user"
                placeholder="اختر موقعك"
                defaultValue={userInfo.location || ''}
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
  position: PropTypes.arrayOf(PropTypes.number).isRequired,
  setPosition: PropTypes.func.isRequired,
};

export default UserInformation;
