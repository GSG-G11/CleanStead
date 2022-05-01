import React from 'react';
import PropTypes from 'prop-types';
import { Header, CategoriesCardsContainer } from '../../Components';

function Home({ categories, loading }) {
  return (
    <div>
      <Header />
      <CategoriesCardsContainer categories={categories} loading={loading} />
    </div>
  );
}
Home.propTypes = {
  loading: PropTypes.bool.isRequired,
  categories: PropTypes.arrayOf(PropTypes.oneOfType(PropTypes.object))
    .isRequired,
};
export default Home;
