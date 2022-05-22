import React from 'react';
import PropTypes from 'prop-types';
import BookContainer from '../../Components/BookNow/BookContainer';

function Book({ categories, setIsOpen }) {
  return <BookContainer categories={categories} setIsOpen={setIsOpen} />;
}
Book.defaultProps = {
  setIsOpen: () => {
    setIsOpen(false);
  },
};
Book.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      description: PropTypes.string,
      image: PropTypes.string,
    })
  ).isRequired,
  setIsOpen: PropTypes.func,
};

export default Book;
