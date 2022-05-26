import React, { useState, useEffect } from 'react';
import axios from 'axios';
import uuid from 'react-uuid';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { message, Table, Tag, Space, Button } from 'antd';

function DashboardBook() {
  const [books, setbooks] = useState([]);
  const [update, setUpdate] = useState(false);
  const [loading, setLoading] = useState(false);

  const columns = [
    {
      title: 'رقم الحجز',
      dataIndex: 'key',
      key: 'key',
    },
    {
      title: 'الاسم ',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'العنوان',
      key: 'location',
      dataIndex: 'location',
    },
    {
      title: 'السعر ',
      key: 'price',
      dataIndex: 'price',
      valueType: 'price',
    },
    {
      title: 'الوقت ',
      key: 'sendtime',
      dataIndex: 'sendtime',
      valueType: 'dateTime',
    },
    {
      title: 'تكرار العمل',
      key: 'repeat',
      dataIndex: 'repeat',
    },
    {
      title: 'الحالة',
      key: 'status',
      dataIndex: 'status',
      valueType: 'status',
      render: (_, record) => (
        <Space>
          {record.status.map(({ name, color }) => (
            <Tag color={color} key={uuid()}>
              {name}
            </Tag>
          ))}
        </Space>
      ),
    },
    {
      title: 'اكشن',
      key: 'option',
      className: 'action',
      width: 30,
      valueType: 'action',
      render: (text, record, _, action) => [
        <Button
          type="text"
          className="delete-contact-button"
          onClick={() => onUpdate(record.key)}
          icon={<EditOutlined style={{ color: '#63D697' }} />}
        />,
        <Button
          type="text"
          className="delete-contact-button"
          onClick={() => onArchived(record.key)}
          icon={<DeleteOutlined style={{ color: '#EA5455' }} />}
        />,
      ],
    },
  ];
  useEffect(() => {
    setLoading(true);
    const cancelTokenSource = axios.CancelToken.source();
    axios
      .get(`/api/v1/book`, {
        cancelToken: cancelTokenSource.token,
      })
      .then(({ data: { data } }) => {
        setbooks(data);
      })
      .catch(() => {
        message.error('حدث خطأ ما');
      })
      .finally(() => setLoading(false));

    return () => cancelTokenSource.cancel();
  }, [update]);

  const tableData = [];
  books.map((book) => {
    tableData.push({
      key: book.id,
      name: book.name,
      location: book.location,
      price: book.price,
      sendtime: book.date_time.split('T').join(' ').split('.')[0],
      repeat: book.repeat,
      status:
        book.status === 'pending'
          ? [
              {
                name: 'مرفوض',
                color: 'error',
              },
            ]
          : [
              {
                name: ' مقبول',
                color: 'success',
              },
            ],
    });
  });

  const onUpdate = (id) => {
    axios
      .put(`/api/v1/book/${id}`)
      .then(({ data }) => {
        // console.log(data);
        message.success(data.message);
        setUpdate(!update);
      })
      .catch(() => {
        message.error('حدث خطأ ما');
      });
  };
  const onArchived = (id) => {
    axios
      .delete(`/api/v1/book/${id}`)
      .then(({ data }) => {
        message.success(data.message);
        setUpdate(!update);
      })
      .catch(() => {
        message.error('حدث خطأ ما');
      });
  };

  return (
    <Table
      columns={columns}
      dataSource={tableData}
      pagination={{
        pageSize: 5,
      }}
      loading={loading}
    />
  );
}

export default DashboardBook;
