import React from 'react';
import PropTypes from 'prop-types';
import { Header, CategoriesCardsContainer, WhyUs } from '../../Components';

function Home({ categories, loading }) {
  return (
    <div>
      <Header />
      <WhyUs />
      <CategoriesCardsContainer categories={categories} loading={loading} />
    </div>
  );
}
Home.defaultProps = {
  loading: false,
};
Home.propTypes = {
  loading: PropTypes.bool,
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      description: PropTypes.string,
      image: PropTypes.string,
    })
  ).isRequired,
};
export default Home;
