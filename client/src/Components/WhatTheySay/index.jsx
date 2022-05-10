/* eslint-disable import/no-unresolved */
import React from 'react';
import { Grid, Row, Col } from 'antd';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import 'swiper/css';
import 'swiper/css/pagination';
import QuoteCard from '../QuoteCard';
import './style.css';
import CustomTitle from '../CustomTitle';
import quotes from '../../Quotes.json';

const { useBreakpoint } = Grid;
function WhatTheySay() {
  const screens = useBreakpoint();
  let count = 3;
  if (screens.xl) count = 3;
  else if (screens.sm) count = 2;
  else if (screens.xs) count = 1;

  return (
    <>
      <Row align="middle" justify="center" className="title-what-says">
        <Col xs={{ span: 20 }}>
          <CustomTitle title="ماذا يقول عملائنا" isLanding />
        </Col>
      </Row>
      <Row align="middle" justify="center">
        <Col xs={{ span: 20 }}>
          <Swiper
            slidesPerView={count}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {quotes.length &&
              quotes.map((quote) => (
                <SwiperSlide key={Math.random()}>
                  <QuoteCard quote={quote} />
                </SwiperSlide>
              ))}
          </Swiper>
        </Col>
      </Row>
    </>
  );
}

export default WhatTheySay;
