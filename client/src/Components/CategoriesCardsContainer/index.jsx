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
    <>
      <CustomTitle title="الخدمات التي نقدمها" isLanding />
      <div className="categories">
        {loading ? (
          <SkeletonLoading />
        ) : categories.length ? (
          <Row gutter={[20, 50]} justify="start">
            {categories.map(({ id, name, description, image }) => (
              <Col key={id} xs={24} sm={12} md={8} lg={6} xl={6}>
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
          <Empty description={"لا يوجد بيانات"} />
        )}
      </div>
    </>
  );
}
CategoriesCardsContainer.propTypes = {
  loading: PropTypes.bool,
  categories: PropTypes.arrayOf(PropTypes.oneOfType(PropTypes.object))
    .isRequired,
};
export default CategoriesCardsContainer;
