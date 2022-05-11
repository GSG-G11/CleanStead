import React from 'react';
import PropTypes from 'prop-types';
import {
  Header,
  CategoriesCardsContainer,
  WhyUs,
  WhatTheySay,
} from '../../Components';

function Home({ categories, loading }) {
  return (
    <div>
      <Header />
      <CategoriesCardsContainer categories={categories} loading={loading} />
      <WhyUs />
      <WhatTheySay />
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
