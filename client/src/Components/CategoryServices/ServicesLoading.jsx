import React from 'react';
import { Skeleton, Col } from 'antd';

const items = [1, 2, 3, 4];
export default function ServicesLoading() {
  return (
    <>
      <Skeleton paragraph={{ rows: 0 }} />
      {items.map((item) => (
        <Col key={item} xs={24} sm={12} md={12} lg={8} xl={8}>
          <Skeleton active avatar paragraph={{ rows: 0 }} />
        </Col>
      ))}
    </>
  );
}
