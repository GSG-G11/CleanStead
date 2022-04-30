import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Typography, Image } from 'antd';
import { LeftOutlined } from '@ant-design/icons';
import './style.css';

const { Title, Paragraph } = Typography;
function CategoriesCard({ categoryId,imageUrl,title,description}) {
  return (
    <Card
      hoverable
      className="category-card"
      cover={(
        <Image
          alt="example"
          className="image"
          src={imageUrl}
        />
      )}
    >
      <Title level={5} className="category-title">
        {title}
      </Title>
      <Paragraph className="category-details">
        {description}
      </Paragraph>
      <Link to={`/category/${categoryId}`}>
        رؤية المزيد
        <LeftOutlined className="left-icon" />
      </Link>
    </Card>
  );
}
export default CategoriesCard;
