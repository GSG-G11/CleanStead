import React from 'react';
import PropTypes from 'prop-types';
import CountUp from 'react-countup';
import { Typography } from 'antd';

const { Title, Text } = Typography;

function StatusNumber({ title, number, backgroundColor, icon }) {
  return (
    <div className="status">
      <div style={{ backgroundColor }} className="status-icon">
        {icon}
      </div>
      <div>
        <Title>
          <CountUp end={number} />
        </Title>
        <Text type="secondary" className="title-status">
          {title}
        </Text>
      </div>
    </div>
  );
}

StatusNumber.propTypes = {
  title: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
};
export default StatusNumber;
