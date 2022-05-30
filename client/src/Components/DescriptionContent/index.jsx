import React, { useContext, useEffect, useState } from 'react';
import { Typography, Button, Image, Row, Col } from 'antd';
import { useParams, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import CustomTitle from '../CustomTitle';
import Services from '../CategoryServices/Services';
import aboutImage from '../../Assets/images/about.jpg';
import { CategoriesContext } from '../../Contexts/CategoriesContext';
import './style.css';

const desc = `
هي شركة تقوم بتوفير خدمات التنظيف للمنازل والمحلات التجارية والشركات
ويوجد لدنيا خدمات تنظيف عالية الجودة والأمان والخدمات المتاحة للزبائن
`;
const { Paragraph } = Typography;
function DescriptionContent({ page }) {
  const { categories } = useContext(CategoriesContext);
  const [data, setData] = useState({
    name: 'من نحن',
    button: 'تواصل معنا',
    description: desc,
    link: '/contact',
    image: '',
  });

  const { id } = useParams();

  useEffect(() => {
    if (page === 'category') {
      categories.filter((category) =>
        category.id === +id ? setData(category) : false
      );
    } else {
      setData({
        name: 'من نحن',
        button: 'تواصل معنا',
        description: desc,
        link: '/contact',
        image: '',
      });
    }
  }, [page, id]);

  return (
    <div>
      <Row justify="center" align="center" gutter={[0, 30]}>
        <Col
          xs={{ span: 22 }}
          sm={{ span: 22 }}
          md={{ span: 22 }}
          lg={{ span: 12 }}
          xl={{ span: 12 }}
        >
          <div className="description-section">
            <Paragraph className="description-paragraph">
              <CustomTitle
                className="description-custom-title"
                title={data.name}
              />
              {data.description}
            </Paragraph>
            {page === 'about' ? (
              <Link to="/contact">
                <Button
                  className="description-button"
                  type="primary"
                  shape="round"
                  size="large"
                >
                  {data.button}
                </Button>
              </Link>
            ) : (
              <Link to="/book">
                <Button
                  className="description-button"
                  type="primary"
                  shape="round"
                  size="large"
                >
                  احجز الان
                </Button>
              </Link>
            )}
          </div>
        </Col>

        <Col
          xs={{ span: 22 }}
          sm={{ span: 22 }}
          md={{ span: 22 }}
          lg={{ span: 12 }}
          xl={{ span: 12 }}
        >
          {page === 'about' ? (
            <Image
              preview={false}
              className="description-image"
              width={450}
              src={aboutImage}
              alt="description"
            />
          ) : (
            <Image
              preview={false}
              className="description-image"
              width={450}
              src={data.image}
              alt="description"
            />
          )}
        </Col>
      </Row>

      {page === 'category' && <Services />}
    </div>
  );
}

DescriptionContent.propTypes = {
  page: PropTypes.string.isRequired,
};
export default DescriptionContent;
