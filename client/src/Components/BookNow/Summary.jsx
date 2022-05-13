/* eslint-disable react/prop-types */
import React from 'react';
import { Divider, Typography, Space } from 'antd';

const { Title, Text } = Typography;

function Summary({ checked }) {
  return (
    <div className="summary">
      <Divider>ملخص</Divider>
      <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
        <div>
          <Title type="secondary" className="summary-title" level={5}>
            العناصر المختارة
          </Title>
          <ul>
            {checked.length ? (
              checked.map((item, index) => <li key={index}>{item}</li>)
            ) : (
              <Text>لا يجود خدمات مختارة</Text>
            )}
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
  );
}
export default Summary;
