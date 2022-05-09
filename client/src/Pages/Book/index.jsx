import React from 'react';
import PropTypes from 'prop-types';
import BookContainer from '../../Components/BookNow/BookContainer';

function Book({ categories }) {
  return <BookContainer categories={categories} />;
}

Book.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      description: PropTypes.string,
      image: PropTypes.string,
    })
  ).isRequired,
};

export default Book;
