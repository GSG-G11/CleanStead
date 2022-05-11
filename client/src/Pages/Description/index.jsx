import React from 'react';
import PropTypes from 'prop-types';
import { ContactUsForm, DescriptionContent } from '../../Components';

function Description({ page, categories }) {
  return (
    <div
      justify="space-around"
      align="middle"
      xs={{ span: 20 }}
      style={{ marginTop: '50px' }}
    >
      {page === 'contact' ? (
        <ContactUsForm categories={categories} />
      ) : (
        <DescriptionContent page={page} categories={categories} />
      )}
    </div>
  );
}

Description.defaultProps = {
  categories: [],
};

Description.propTypes = {
  page: PropTypes.string.isRequired,
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      description: PropTypes.string,
      image: PropTypes.string,
    })
  ),
};
export default Description;
