import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Typography, Radio, Form, DatePicker } from 'antd';

const { Title } = Typography;
const repeated = ['مرة واحدة', 'يومياً', 'أسبوعياً', 'شهرياً'];
function DateTimeChoice({
  valueDate,
  valueRadio,
  setValueRadio,
  setValueDate,
}) {
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
        <Form.Item label="تكرار الخدمة" required>
          <Radio.Group onChange={onChangeRadio} value={valueRadio}>
            {repeated.map((repeat) => (
              <Radio className="radio-repeat" key={repeat} value={repeat}>
                {repeat}
              </Radio>
            ))}
          </Radio.Group>
        </Form.Item>
        <Form.Item label="التاريخ والوقت" required>
          <DatePicker
            value={
              valueDate.length ? moment(valueDate, 'A h:mm | YYYY-MM-DD') : ''
            }
            use12Hours
            onChange={onChange}
            format="A h:mm | YYYY-MM-DD"
            disabledDate={disabledDate}
            showTime
            allowClear={false}
          />
        </Form.Item>
      </Form>
    </div>
  );
}

DateTimeChoice.defaultProps = {
  valueDate: '',
  valueRadio: 'مرة واحدة',
};

DateTimeChoice.propTypes = {
  valueDate: PropTypes.string,
  setValueRadio: PropTypes.func.isRequired,
  setValueDate: PropTypes.func.isRequired,
  valueRadio: PropTypes.string,
};

export default DateTimeChoice;
