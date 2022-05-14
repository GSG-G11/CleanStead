import React from 'react';
import PropTypes from 'prop-types';
import { Typography, Radio, Form, DatePicker } from 'antd';

const { Title } = Typography;
const repeated = ['مرة واحدة', 'يومياً', 'أسبوعياً', 'شهرياً'];
function DateTimeChoice({ valueRadio, onChangeRadio, setValueDate }) {
  const onChange = (value, dateString) => {
    setValueDate(dateString);
  };
  return (
    <div>
      <Title level={4}>اختر موعد الحجز</Title>
      <Form layout="vertical">
        <Form.Item label="تكرار الخدمة">
          <Radio.Group onChange={onChangeRadio} value={valueRadio}>
            {repeated.map((repeat) => (
              <Radio className="radio-repeat" key={repeat} value={repeat}>
                {repeat}
              </Radio>
            ))}
          </Radio.Group>
        </Form.Item>
        <Form.Item label="التاريخ والوقت">
          <DatePicker showTime onChange={onChange} />
        </Form.Item>
      </Form>
    </div>
  );
}
DateTimeChoice.defaultProps = {
  valueRadio: 'مرة واحدة',
};
DateTimeChoice.propTypes = {
  onChangeRadio: PropTypes.func.isRequired,
  setValueDate: PropTypes.func.isRequired,
  valueRadio: PropTypes.string,
};
export default DateTimeChoice;
