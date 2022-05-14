import React from 'react';
import uuid from 'react-uuid';
import PropTypes from 'prop-types';
import { Divider, Typography, Space } from 'antd';

const { Title, Text } = Typography;

function Summary({ checked, valueDate, valueRadio }) {
  let totalPrice = 0;

  for (let i = 0; i < checked.length; i += 1) {
    totalPrice += checked[i].price * checked[i].count;
  }

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
              checked.map((item) => (
                <li key={uuid()}>
                  {item.name}({item.count}){' '}
                  <Text strong>{item.price}&#36;</Text>
                </li>
              ))
            ) : (
              <Text>لا يجود خدمات مختارة</Text>
            )}
          </ul>
        </div>
        <div>
          <Title type="secondary" className="summary-title" level={5}>
            مدة التكرار
          </Title>
          <Text strong className="title">
            {valueRadio}
          </Text>
        </div>
        <div>
          <Title type="secondary" className="summary-title" level={5}>
            التاريخ والوقت
          </Title>
          <Text strong className="title">
            {valueDate}
          </Text>
        </div>
        <div>
          <Title type="secondary" className="summary-title" level={5}>
            إجمالي السعر
          </Title>
          <Text className="total-price" strong>
            {totalPrice}&#36;
          </Text>
        </div>
      </Space>
    </div>
  );
}
Summary.defaultProps = {
  valueDate: 'لم يتم تحديد موعد بعد',
  valueRadio: 'مرة وحدة',
};
Summary.propTypes = {
  checked: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      image: PropTypes.string,
      price: PropTypes.number,
      count: PropTypes.number,
      description: PropTypes.string,
    })
  ).isRequired,
  valueDate: PropTypes.string,
  valueRadio: PropTypes.string,
};
export default Summary;
