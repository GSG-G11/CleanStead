import React from 'react';
import PropTypes from 'prop-types';
import { Empty } from 'antd';

function EmptyCard({description}) {
  return <Empty description={
    <span>
      {description}
    </span>
  } />;
}
EmptyCard.propTypes = {
  description: PropTypes.string.isRequired
}
export default EmptyCard;
