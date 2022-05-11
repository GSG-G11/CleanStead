import React from 'react';
import { Skeleton } from 'antd';
// eslint-disable-next-line import/no-unresolved
import { Swiper, SwiperSlide } from 'swiper/react';

export default function ServicesLoading() {
  return (
    <>
      <Skeleton paragraph={{ rows: 0 }} />
      <Swiper centeredSlides slidesPerView="auto" className="mySwiper">
        <SwiperSlide
          style={{ backgroundColor: '#f2f2f2', width: '100%', height: '400px' }}
        />
      </Swiper>
    </>
  );
}
