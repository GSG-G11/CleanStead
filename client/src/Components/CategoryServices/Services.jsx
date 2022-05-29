/* eslint-disable import/no-unresolved */
import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Empty, message, Row, Col, Typography } from 'antd';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  EffectCoverflow,
  Pagination,
  Navigation,
  Lazy,
  Autoplay,
} from 'swiper';
import ServiceCard from './ServiceCard';
import ServicesLoading from './ServicesLoading';
import './style.css';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/lazy';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { CategoriesContext } from '../../Contexts/CategoriesContext';

const { Title } = Typography;

export default function Services() {
  const { categories } = useContext(CategoriesContext);
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
      .get(`/api/v1/categories/${id}/services`, {
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
  }, [id]);

  return (
    <Row
      gutter={[0, 16]}
      justify="center"
      align="middle"
      className="service-container"
    >
      <Col
        xs={{ span: 23 }}
        sm={{ span: 23 }}
        md={{ span: 23 }}
        lg={{ span: 23 }}
        xl={{ span: 23 }}
      >
        {loading ? (
          <ServicesLoading />
        ) : services.length ? (
          <>
            <Title level={4} style={{ width: '100%', marginRight: 20 }}>
              الخدمات المتوفرة في {category.name}
            </Title>
            <Swiper
              effect="coverflow"
              grabCursor
              lazy
              loop
              centeredSlides
              slidesPerView="auto"
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation
              modules={[
                EffectCoverflow,
                Pagination,
                Navigation,
                Lazy,
                Autoplay,
              ]}
              className="mySwiper"
            >
              {services.map((service) => (
                <SwiperSlide key={service.id}>
                  <ServiceCard service={service} />
                </SwiperSlide>
              ))}
            </Swiper>
          </>
        ) : (
          <Empty
            image={Empty.PRESENTED_IMAGE_SIMPLE}
            style={{ margin: 'auto' }}
          />
        )}
      </Col>
    </Row>
  );
}
