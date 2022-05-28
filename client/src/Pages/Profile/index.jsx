import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import uuid from 'react-uuid';
import { Row, Col, message, Descriptions, Typography, Spin, Empty } from 'antd';
import { userContext } from '../../Contexts/userContext';
import Cover from './Cover';
import './style.css';

const { Title } = Typography;

function Profile() {
  const [myBooks, setMyBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const { userInfo } = useContext(userContext);

  useEffect(() => {
    setLoading(true);
    const cancelTokenSource = axios.CancelToken.source();
    if (userInfo) {
      axios
        .get(`/api/v1/user/${userInfo.id}/book`, {
          cancelToken: cancelTokenSource.token,
        })
        .then(({ data: { data } }) => {
          setMyBooks(data);
        })
        .catch(() => {})
        .finally(() => setLoading(false));
    }
    return () => cancelTokenSource.cancel();
  }, []);

  return (
    <Row justify="center" align="middle">
      <Col
        xs={{ span: 20 }}
        sm={{ span: 20 }}
        md={{ span: 20 }}
        lg={{ span: 20 }}
        xl={{ span: 20 }}
      >
        <Cover />
        {loading ? (
          <Spin />
        ) : myBooks.length ? (
          <div>
            <Row justify="center" align="middle">
              <Col
                className="my-book"
                xs={{ span: 18 }}
                sm={{ span: 18 }}
                md={{ span: 18 }}
                lg={{ span: 18 }}
                xl={{ span: 18 }}
              >
                <Title className="all-book">الحجوزات</Title>
                {myBooks.map((myBook) => (
                  <div key={uuid()} className="book-table">
                    <Descriptions
                      bordered
                      column={{
                        xxl: 4,
                        xl: 3,
                        lg: 3,
                        md: 3,
                        sm: 2,
                        xs: 1,
                      }}
                    >
                      <Descriptions.Item label="رقم الحجز">
                        {myBook.id}
                      </Descriptions.Item>
                      <Descriptions.Item label="التكرار">
                        {myBook.repeat}
                      </Descriptions.Item>
                      <Descriptions.Item label="السعر">
                        {myBook.price}$
                      </Descriptions.Item>
                      <Descriptions.Item label="الحالة">
                        {myBook.status}
                      </Descriptions.Item>
                      <Descriptions.Item label="تاريخ الحجز">
                        {myBook.date_time
                          .split('T')
                          .join(' ')
                          .split('.')[0]
                          .slice(0, -3)}
                      </Descriptions.Item>
                    </Descriptions>
                  </div>
                ))}
              </Col>
            </Row>
          </div>
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
export default Profile;
