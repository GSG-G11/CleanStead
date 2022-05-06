import React from 'react';
import { Skeleton,Row, Col } from 'antd';

const item = [1,2,3]
function SkeletonLoading() {
   return <Row gutter={[20, 50]} justify="start">
  {item.map((item) => (
    <Col key={item} xs={24} sm={12} md={8} lg={6} xl={6}>
     <Skeleton active avatar paragraph={{ rows: 2 }} />
    </Col>
  ))}
  </Row>
}
export default SkeletonLoading;
