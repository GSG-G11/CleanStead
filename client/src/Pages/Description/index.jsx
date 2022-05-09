import React from 'react';
import PropTypes from 'prop-types';
import { Image, Row, Col } from 'antd';
import Img from '../../Assets/images/img1.png';
import { ContactUsForm, DescriptionContent } from '../../Components';

function Description({ page }) {
  return (
    <Row>
      <Col>
        <Image
          preview={false}
          className="description-image"
          width={450}
          src={Img}
        />
      </Col>
      <Col>
        {page === 'contact' ? <ContactUsForm /> : <DescriptionContent />}
      </Col>
    </Row>
  );
}

Description.propTypes = {
  page: PropTypes.string.isRequired,
};
export default Description;
