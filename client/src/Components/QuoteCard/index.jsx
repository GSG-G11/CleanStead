import React from 'react';
import PropTypes from 'prop-types';
import { Image, Typography } from 'antd';
import './style.css';

const { Paragraph, Title } = Typography;

function QuoteCard({ quote: { name, desc, img } }) {
  return (
    <div className="quote-card">
      <Image
        preview={false}
        width={120}
        height={120}
        src={img}
        alt="person image"
        className="person-img"
      />
      <div className="quote-words">
        <Paragraph>{desc}</Paragraph>
        <Title level={5}>{name}</Title>
      </div>
    </div>
  );
}

QuoteCard.propTypes = {
  quote: PropTypes.shape({
    name: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
  }),
};

QuoteCard.defaultProps = {
  quote: { name: '', desc: '', img: '' },
};

export default QuoteCard;
