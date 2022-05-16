import React from 'react';
import uuid from 'react-uuid';
import PropTypes from 'prop-types';
import { Divider, Typography, Space } from 'antd';

const { Title, Text } = Typography;

function Summary({ categoryServices, valueDate, valueRadio }) {
  let totalPrice = 0;
  let services = [];

  if (Object.keys(categoryServices).length) {
    Object.values(categoryServices).forEach((value) => {
      services = value.filter((item) => item.isChecked === true);
    });
  }

  if (services.length) {
    totalPrice = services.reduce(
      (acc, curr) => acc + curr.price * curr.quantity,
      0
    );
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
            {services.length ? (
              services.map((item) => (
                <li key={uuid()}>
                  {item.name}({item.quantity}){' '}
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
  categoryServices: PropTypes.shape({
    id: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        image: PropTypes.string,
        price: PropTypes.number,
        description: PropTypes.string,
        quantity: PropTypes.number,
        isChecked: PropTypes.bool,
      })
    ),
  }).isRequired,
  valueDate: PropTypes.string,
  valueRadio: PropTypes.string,
};

export default Summary;
