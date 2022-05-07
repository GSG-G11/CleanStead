import React from 'react';
import { Grid, Row, Col } from 'antd';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
// import Swiper, { Pagination, SwiperSlide } from 'swiper';
import QuoteCard from '../QuoteCard';
// import 'swiper/css/bundle';
// import 'swiper/css';
// import 'swiper/css/pagination';

import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';
import './style.css';

const { useBreakpoint } = Grid;

function WhatTheySay() {
  const screens = useBreakpoint();
  let count = 3;
  if (screens.lg) count = 3;
  else if (screens.md) count = 2;
  else if (screens.sm) count = 2;
  else if (screens.xl) count = 1;
  else if (screens.xs) count = 1;

  const quotes = [
    {
      name: 'محمد',
      desc: 'دائما يقومون بعمل جيد وبالوقت المحدد, انا حقا سعيد بهذه التجربة',
      img: 'https://picsum.photos/200/300',
    },
    {
      name: 'اسراء',
      desc: 'دائما يقومون بعمل جيد وبالوقت المحدد, انا حقا سعيد بهذه التجربة',
      img: 'https://picsum.photos/200/300',
    },
    {
      name: 'جهاد',
      desc: 'دائما يقومون بعمل جيد وبالوقت المحدد, انا حقا سعيد بهذه التجربة',
      img: 'https://picsum.photos/200/300',
    },
    {
      name: 'مصطفى',
      desc: 'دائما يقومون بعمل جيد وبالوقت المحدد, انا حقا سعيد بهذه التجربة',
      img: 'https://picsum.photos/200/300',
    },
  ];

  return (
    <Row align="middle" justify="center">
      <Col xs={{ span: 23 }}>
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
  );
}

export default WhatTheySay;
