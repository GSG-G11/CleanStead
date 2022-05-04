import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';
import { Empty, message, Row, Typography, Button, Divider, Space } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import ServiceCard from './ServiceCard';
import './style.css';
import ServicesLoading from './ServicesLoading';

const { Title } = Typography;

export default function Services({ categories: { categories } }) {
  const [limit, setLimit] = useState(6);
  const [loading, setLoading] = useState(false);
  const [services, setServices] = useState([]);
  const [category, setCategory] = useState({});
  const { id } = useParams();

  useEffect(() => {
    categories.filter((categor) =>
      categor.id === +id ? setCategory(categor) : false
    );
  }, [services]);

  useEffect(() => {
    setLoading(true);
    const cancelTokenSource = axios.CancelToken.source();
    axios
      .get(`/api/v1/categories/${id}/services?size=${limit}`, {
        cancelToken: cancelTokenSource.token,
      })
      .then(({ data: { data } }) => {
        setServices(data);
      })
      .catch(() => {
        message.error('حدث خطأ ما');
      })
      .finally(() => setLoading(false));
    return () => cancelTokenSource.cancel();
  }, [id, limit]);

  const loadMore = () => {
    if (services.length >= limit) {
      setLimit((prev) => prev * 2);
    } else {
      setLimit((prev) => prev / 2);
    }
  };
  console.log(limit);

  return (
    <>
      <Row
        gutter={[0, 16]}
        justify="start"
        align="middle"
        className="service-container"
      >
        {loading ? (
          <ServicesLoading />
        ) : services.length ? (
          <>
            <Title level={4} style={{ width: '100%', marginRight: 20 }}>
              الخدمات المتوفرة في {category.name}
            </Title>
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </>
        ) : (
          <Empty
            image={Empty.PRESENTED_IMAGE_SIMPLE}
            style={{ margin: 'auto' }}
          />
        )}
      </Row>
      {services.length >= 6 && (
        <Divider orientation="center">
          <Button type="text" onClick={loadMore}>
            <Space size={10}>
              {loading
                ? 'تحميل...'
                : services.length >= limit
                ? 'رؤية المزيد'
                : 'رؤية أقل'}
              <DownOutlined />
            </Space>
          </Button>
        </Divider>
      )}
    </>
  );
}

Services.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.oneOfType(PropTypes.object))
    .isRequired,
};
