import React from 'react';
import PropTypes from 'prop-types';
import Services from '../../Components/CategoryServices/Services';

function Category({ categories }) {
  return <Services categories={categories} />;
}

Category.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      description: PropTypes.string,
      image: PropTypes.string,
    })
  ).isRequired,
};
export default Category;
