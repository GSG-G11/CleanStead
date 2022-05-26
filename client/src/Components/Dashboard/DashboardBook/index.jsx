import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import uuid from 'react-uuid';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { message, Table, Tag, Space, Button, Modal, Radio } from 'antd';
import { ModalLoginContext } from '../../../Contexts/ModalLogin';

function DashboardBook() {
  const { isOpen, setIsOpen } = useContext(ModalLoginContext);
  const handleCancel = () => {
    setIsOpen(false);
  };
  const [books, setbooks] = useState([]);
  const [update, setUpdate] = useState(false);
  const [loading, setLoading] = useState(false);
  const [statusValue, setStatusValue] = useState('pending');
  const [currentRecord, setCurrentRecord] = useState('pending');

  const onUpdate = (id, value) => {
    console.log(value);
    switch (value) {
      case 'معلق':
        setStatusValue('pending');
        break;
      case 'مقبول':
        setStatusValue('approve');
        break;
      case 'مرفوض':
        setStatusValue('reject');
        break;
      default:
        setStatusValue('pending');
        break;
    }
    setCurrentRecord(id);
    setIsOpen(true);
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
      render: (record) => [
        <Button
          type="text"
          className="delete-contact-button"
          onClick={() => {
            onUpdate(record.key, record.status[0].name);
          }}
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
                name: 'معلق',
                color: 'warning',
              },
            ]
          : book.status === 'approve'
          ? [
              {
                name: 'مقبول',
                color: 'success',
              },
            ]
          : [
              {
                name: 'مرفوض',
                color: 'error',
              },
            ],
    });
  });

  const changeStatus = (e) => {
    setStatusValue(e.target.value);
  };

  const updateStatus = () => {
    console.log('statusValue', statusValue);
    axios
      .put(`/api/v1/book/${currentRecord}`, { status: statusValue })
      .then(({ data }) => {
        // console.log(data);
        message.success(data.message);
        setUpdate(!update);
      })
      .catch(() => {
        message.error('حدث خطأ ما');
      });
    setIsOpen(false);
  };
  return (
    <>
      <Modal
        title="تعديل الحجز"
        visible={isOpen}
        okText="تعديل"
        cancelText="إلغاء"
        onCancel={handleCancel}
        width={430}
        onOk={updateStatus}
      >
        <Radio.Group
          name="radiogroup"
          value={statusValue}
          onChange={changeStatus}
        >
          <Radio value="approve">مقبول</Radio>
          <Radio value="pending">معلق</Radio>
          <Radio value="reject">مرفوض</Radio>
        </Radio.Group>
      </Modal>
      <Table
        columns={columns}
        dataSource={tableData}
        pagination={{
          pageSize: 5,
        }}
        loading={loading}
      />
    </>
  );
}

export default DashboardBook;
