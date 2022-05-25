import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import io from 'socket.io-client';
import uuid from 'react-uuid';
import { DeleteOutlined, CheckSquareOutlined } from '@ant-design/icons';
import { Tag, Space, message, Button, Table } from 'antd';
import './style.css';
import { CategoriesContext } from '../../../Contexts/CategoriesContext';

const socket = io.connect('http://127.0.0.1:5000');
function Contact() {
  const [contacts, setContacts] = useState([]);
  const [update, setUpdate] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    socket.on('updateContact', () => {
      message.info('New contact added');
      setUpdate((prev) => !prev);
    });
  }, [socket]);

  const columns = [
    {
      title: '#',
      dataIndex: 'key',
      key: 'key',
    },
    {
      title: 'اسم المرسل',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'الخدمة',
      key: 'category',
      dataIndex: 'category',
    },
    {
      title: 'تاريخ الإرسال',
      key: 'sendtime',
      dataIndex: 'sendtime',
      valueType: 'dateTime',
    },
    {
      title: 'رقم الجوال',
      key: 'phone',
      dataIndex: 'phone',
      valueType: 'phone',
    },
    {
      title: 'الايميل',
      key: 'email',
      dataIndex: 'email',
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
        <Space size={3}>
          <Button
            type="text"
            className="delete-contact-button"
            onClick={() => onResponse(record.key)}
            icon={<CheckSquareOutlined style={{ color: '#63D697' }} />}
          />
          ,
          <Button
            type="text"
            className="delete-contact-button"
            onClick={() => onArchived(record.key)}
            icon={<DeleteOutlined style={{ color: '#EA5455' }} />}
          />
        </Space>,
      ],
    },
  ];
  useEffect(() => {
    setLoading(true);
    const cancelTokenSource = axios.CancelToken.source();
    axios
      .get(`/api/v1/contact`, {
        cancelToken: cancelTokenSource.token,
      })
      .then(({ data: { data } }) => {
        setContacts(data);
      })
      .catch(() => {
        message.error('حدث خطأ ما');
      })
      .finally(() => setLoading(false));

    return () => cancelTokenSource.cancel();
  }, [update]);

  const { categories } = useContext(CategoriesContext);

  const tableData = [];
  contacts.map((contact) => {
    tableData.push({
      key: contact.id,
      name: contact.name,
      message: contact.message,
      category: categories.filter(
        (category) => category.id === contact.category_id
      )[0].name,
      sendtime: contact.sendtime.split('T').join(' ').split('.')[0],
      phone: contact.phone,
      email: contact.email,
      status:
        contact.status === 'pending'
          ? [
              {
                name: 'معلق',
                color: 'error',
              },
            ]
          : [
              {
                name: 'تم الرد',
                color: 'success',
              },
            ],
    });
  });

  const onResponse = (id) => {
    axios
      .put(`/api/v1/contact/status/${id}`)
      .then(({ data }) => {
        message.success(data.message);
        setUpdate(!update);
      })
      .catch(() => {
        message.error('حدث خطأ ما');
      });
  };
  const onArchived = (id) => {
    axios
      .delete(`/api/v1/contact/archives/${id}`)
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
      expandable={{
        expandedRowRender: (record) => (
          <p
            className="contact-desc-table"
            style={{
              margin: 0,
            }}
          >
            <strong>الرسالة: </strong>
            {record.message}
          </p>
        ),
        rowExpandable: (record) => record.name !== 'Not Expandable',
      }}
      pagination={{
        pageSize: 5,
      }}
      loading={loading}
      scroll={{
        x: 800,
      }}
    />
  );
}

export default Contact;
