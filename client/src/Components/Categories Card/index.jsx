import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Typography, Button } from 'antd';
import { LeftOutlined } from '@ant-design/icons';
import './style.css';

const { Title, Paragraph } = Typography;
function CategoriesCard() {
  return (
    <Card
      hoverable
      className="category-card"
      cover={(
        <img
          alt="example"
          className="image"
          src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
        />
      )}
    >
      <Title level={5} className="category-title">
        تنظيف المنزل
        {' '}
      </Title>
      <Paragraph className="category-details">
        يجب علينا دائما أن نتواجد في مكان نظيف ومرتب لذلك نتوقع دائما أن يكون
        منزلك بهذا الشكل ونتفهم أيضًا أنه قد لا يكون لديك دائمًا الوقت للقيام
        بذلك بنفسك أو قد لاتكون لديك الصحة للتنظيف. لذلك لدينا فريق مهني لضمان
        حصولك على منزل نظيف بما يرضيك
      </Paragraph>
      <Link to="/category/1">
        رؤية المزيد
        <LeftOutlined className="left-icon" />
      </Link>
    </Card>
  );
}
export default CategoriesCard;
