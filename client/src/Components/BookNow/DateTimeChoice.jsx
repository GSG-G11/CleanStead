import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Typography, Radio, Form, DatePicker } from 'antd';

const { Title } = Typography;
const repeated = ['مرة واحدة', 'يومياً', 'أسبوعياً', 'شهرياً'];
function DateTimeChoice({ valueRadio, setValueRadio, setValueDate }) {
  const onChange = (value, dateString) => {
    setValueDate(dateString);
  };
  const onChangeRadio = (e) => {
    setValueRadio(e.target.value);
  };
  const disabledDate = (current) => {
    const customDate = moment().format('YYYY-MM-DD');
    return current && current < moment(customDate, 'YYYY-MM-DD');
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
          <DatePicker
            onChange={onChange}
            format="YYYY-MM-DD HH:mm"
            disabledDate={disabledDate}
            showTime
          />
        </Form.Item>
      </Form>
    </div>
  );
}
DateTimeChoice.defaultProps = {
  valueRadio: 'مرة واحدة',
};
DateTimeChoice.propTypes = {
  setValueRadio: PropTypes.func.isRequired,
  setValueDate: PropTypes.func.isRequired,
  valueRadio: PropTypes.string,
};
export default DateTimeChoice;
