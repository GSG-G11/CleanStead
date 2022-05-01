import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Row, Typography } from 'antd';
import ServiceCard from './ServiceCard';
import './style.css';

const { Title } = Typography;

export default function Services() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const cancelTokenSource = axios.CancelToken.source();
    axios.get('/api/v1/categories/1/services', {
      cancelToken: cancelTokenSource.token,
    })
      .then((res) => {
        setServices(res.data.data);
      });

    return () => cancelTokenSource.cancel();
  }, [services]);

  return (
    <>
      <Title level={4}>الخدمات المتوفرة في تنظيف المنازل</Title>
      <Row
        gutter={[0, 22]}
        align="center"
        justify="end"
        className="service-container"
      >
        {services.map((service) => <ServiceCard key={service.id} service={service} />)}
      </Row>
    </>
  );
}
