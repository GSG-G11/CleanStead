import React, { useContext, useEffect, useState } from 'react';
import { Typography, Button, Image, Row, Col } from 'antd';
import { useParams, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import CustomTitle from '../CustomTitle';
import Services from '../CategoryServices/Services';
import Img from '../../Assets/images/img1.png';
import { CategoriesContext } from '../../Contexts/CategoriesContext';
import './style.css';

const desc = ` هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أوالعديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدهاالتطبيق. إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص
العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي
أخطاء لغوية
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
              src={Img}
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
