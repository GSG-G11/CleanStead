import React, { useEffect, useState } from 'react';
import { Typography, Button, Image, Row, Col } from 'antd';
import { useParams, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import CustomTitle from '../CustomTitle';
import Services from '../CategoryServices/Services';
import Img from '../../Assets/images/img1.png';

import './style.css';

const desc = ` هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أوالعديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدهاالتطبيق. إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص
العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي
أخطاء لغوية
`;
const { Paragraph } = Typography;
function DescriptionContent({ page, categories }) {
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
    }
  });

  return (
    <div>
      <Row>
        <Col span={12}>
          <div className="description-section">
            <CustomTitle
              className="description-custom-title"
              title={data.name}
            />
            <Paragraph className="description-paragraph">
              {data.description}
            </Paragraph>
            {page === 'category' ? (
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
            ) : (
              <Link to="/book">
                <Button
                  className="description-button"
                  type="primary"
                  shape="round"
                  size="large"
                >
                  {data.button}
                </Button>
              </Link>
            )}
          </div>
        </Col>

        <Col span={12}>
          {page === 'category' ? (
            <Image
              preview={false}
              className="description-image"
              width={450}
              src={data.image}
            />
          ) : (
            <Image
              preview={false}
              className="description-image"
              width={450}
              src={Img}
            />
          )}
        </Col>
      </Row>

      {page === 'category' && <Services categories={categories} />}
    </div>
  );
}

DescriptionContent.defaultProps = {
  categories: [],
};

DescriptionContent.propTypes = {
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
export default DescriptionContent;
