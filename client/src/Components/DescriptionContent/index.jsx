import React, { useEffect, useState } from 'react';
import { Typography, Button } from 'antd';
import { useParams, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import CustomTitle from '../CustomTitle';
import Services from '../CategoryServices/Services';

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
  });

  const { id } = useParams();

  useEffect(() => {
    if (page === 'category') {
      categories.filter((category) => {
        console.log(category);
        return category.id === +id ? setData(category) : false;
      });
      console.log(data);
    }
  });

  return (
    <div className="content-section">
      <CustomTitle title={data.name} />
      <Paragraph className="content-paragraph">{data.description}</Paragraph>
      {page === 'category' ? (
        <Link to="/book">
          <Button
            className="content-button"
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
            className="content-button"
            type="primary"
            shape="round"
            size="large"
          >
            {data.button}
          </Button>
        </Link>
      )}
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
