import React from 'react';
import PropTypes from 'prop-types';
import { Empty } from 'antd';

function EmptyCard({ description }) {
  return <Empty description={description} />;
}
EmptyCard.defaultProps = {
  description: 'لا يوجد بيانات',
};
EmptyCard.propTypes = {
  description: PropTypes.string,
};
export default EmptyCard;
