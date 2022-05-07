import React from 'react';
import { Grid, Row, Col } from 'antd';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';
import QuoteCard from '../QuoteCard';
import './style.css';
import CustomTitle from '../CustomTitle';

const { useBreakpoint } = Grid;
function WhatTheySay() {
  const screens = useBreakpoint();
  console.log('file: index.jsx ~ line 15 ~ WhatTheySay ~ screens', screens);
  let count = 3;
  if (screens.xl) count = 3;
  // else if (screens.lg) count = 3;
  // else if (screens.md) count = 3;
  else if (screens.sm) count = 2;
  else if (screens.xs) count = 1;

  const quotes = [
    {
      name: 'محمد',
      desc: 'دائما يقومون بعمل جيد وبالوقت المحدد, انا حقا سعيد بهذه التجربة',
      img: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    },
    {
      name: 'اسراء',
      desc: 'دائما يقومون بعمل جيد وبالوقت المحدد, انا حقا سعيد بهذه التجربة',
      img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    },
    {
      name: 'جهاد',
      desc: 'دائما يقومون بعمل جيد وبالوقت المحدد, انا حقا سعيد بهذه التجربة',
      img: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80',
    },
    {
      name: 'مصطفى',
      desc: 'دائما يقومون بعمل جيد وبالوقت المحدد, انا حقا سعيد بهذه التجربة',
      img: 'https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    },
  ];

  return (
    <>
      <Row align="middle" justify="center" className="title-what-says">
        <Col xs={{ span: 23 }}>
          <CustomTitle title="ماذا يقولون عملائنا" isLanding />
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
