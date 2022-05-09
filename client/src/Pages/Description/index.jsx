import React from 'react';
import PropTypes from 'prop-types';
import { Image, Row, Col } from 'antd';
import Img from '../../Assets/images/img1.png';
import { ContactUsForm, DescriptionContent } from '../../Components';

function Description({ page, categories }) {
  return (
    <Row
      justify="space-around"
      align="middle"
      xs={{ span: 20 }}
      style={{ marginTop: '50px' }}
    >
      <Col>
        {page === 'contact' ? (
          <ContactUsForm />
        ) : (
          <DescriptionContent page={page} categories={categories} />
        )}
      </Col>
      <Col>
        <Image
          preview={false}
          className="description-image"
          width={450}
          src={Img}
        />
      </Col>
    </Row>
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
