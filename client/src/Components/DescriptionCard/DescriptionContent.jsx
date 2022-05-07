import { Typography, Button } from 'antd';
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CustomTitle from '../CustomTitle';
import './style.css';

const desc = `              هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أوالعديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدهاالتطبيق. إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص
العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي
أخطاء لغوية
`;
const { Paragraph } = Typography;
function DescriptionContent({ title, button, description, link }) {
  return (
    <div className="who-section">
      <CustomTitle title={title} />
      <Paragraph className="who-paragraph">{description}</Paragraph>
      <Link to={link}>
        <Button
          className="who-button"
          type="primary"
          shape="round"
          size="large"
        >
          {button}
        </Button>
      </Link>
    </div>
  );
}
DescriptionContent.defaultProps = {
  title: 'من نحن',
  button: 'تواصل معنا',
  description: desc,
  link: '/contact',
};
DescriptionContent.propTypes = {
  button: PropTypes.string,
  description: PropTypes.string,
  link: PropTypes.string,
  title: PropTypes.string,
};
export default DescriptionContent;
