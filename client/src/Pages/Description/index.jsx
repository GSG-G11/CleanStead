import React from 'react';
import PropTypes from 'prop-types';
import { ContactUsForm, DescriptionContent } from '../../Components';

function Description({ page }) {
  return (
    <div
      justify="space-around"
      align="middle"
      xs={{ span: 20 }}
      style={{ marginTop: '50px' }}
    >
      {page === 'contact' ? (
        <ContactUsForm />
      ) : (
        <DescriptionContent page={page} />
      )}
    </div>
  );
}

Description.propTypes = {
  page: PropTypes.string.isRequired,
};
export default Description;
