import React from 'react';
import { Link } from 'react-router-dom';
import { Image, Typography, Button } from 'antd';
import notfoundImage from '../../Assets/images/notfoundimage.png';
import './style.css';

const { Title } = Typography;

function NotFound() {
  return (
    <div className="not-found">
      <Image src={notfoundImage} alt="Not Found Image" preview={false} />
      <Title level={3} className="not-found-title">
        لا توجد هذه الصفحة
      </Title>
      <Link to="/">
        <Button className="go-home-button" type="danger">
          الرجوع للصفحة الرئيسية
        </Button>
      </Link>
    </div>
  );
}
export default NotFound;
