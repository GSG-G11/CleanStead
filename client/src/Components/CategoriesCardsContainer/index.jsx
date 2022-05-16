import React from 'react';
import { Row, Col } from 'antd';
import PropTypes from 'prop-types';
import SkeletonLoading from '../SkeletonLoading';
import Empty from '../Empty';
import CategoriesCard from '../CategoriesCard';
import CustomTitle from '../CustomTitle';
import './style.css';

function CategoriesCardsContainer({ categories, loading }) {
  return (
    <div className="categories-card">
      <CustomTitle title="الخدمات التي نقدمها" isLanding />
      <div className="categories">
        {loading ? (
          <SkeletonLoading />
        ) : categories.length ? (
          <Row gutter={[20, 50]} justify="start">
            {categories.map(({ id, name, description, image }) => (
              <Col key={id} xs={24} sm={12} md={12} lg={8} xl={8}>
                <CategoriesCard
                  title={name}
                  description={description}
                  imageUrl={image}
                  categoryId={id}
                />
              </Col>
            ))}
          </Row>
        ) : (
          <Empty description="لا يوجد بيانات" />
        )}
      </div>
    </div>
  );
}
CategoriesCardsContainer.defaultProps = {
  loading: false,
};
CategoriesCardsContainer.propTypes = {
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
export default CategoriesCardsContainer;
