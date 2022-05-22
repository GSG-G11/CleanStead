import React from 'react';
import { Link } from 'react-router-dom';
import { Image, Typography, Button } from 'antd';
import notfoundimage from '../../Assets/images/notfoundimage.png';
import './style.css';

const { Title } = Typography;

function NotFound() {
  return (
    <div className="not-found">
      <Image src={notfoundimage} alt="Not Found Image" preview={false} />
      <Title level={3} className="not-found-title">
        We can not seem to find the page you are looking for
      </Title>
      <Link to="/">
        <Button className="go-home-button" type="danger">
          Go Back To Home Page
        </Button>
      </Link>
    </div>
  );
}
export default NotFound;
