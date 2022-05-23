import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { DeleteOutlined, CheckSquareOutlined } from '@ant-design/icons';
import { Tag, Space, message, Button } from 'antd';
import ProTable from '@ant-design/pro-table';
import './style.css';
import { CategoriesContext } from '../../../Contexts/CategoriesContext';

function Contact() {
  const [contacts, setContacts] = useState([]);
  const [update, setUpdate] = useState(false);
  // const [updateArchive, setUpdateArchive] = useState(false);

  const columns = [
    {
      title: 'الرقم',
      dataIndex: 'key',
      valueType: 'indexBorder',
      width: 48,
    },
    {
      title: 'اسم المرسل',
      dataIndex: 'name',
      formItemProps: {
        rules: [
          {
            required: true,
            message: 'هذا الحقل مطلوب',
          },
        ],
      },
      search: false,
    },
    {
      title: 'الخدمة',
      key: 'category',
      dataIndex: 'category',
      valueType: 'category',
    },
    {
      title: 'الرسالة',
      dataIndex: 'message',
      className: 'message',
      copyable: true,
      tip: 'سيتم تقليص العنوان في حال كان طويل جدًا',
      formItemProps: {
        rules: [
          {
            required: true,
            message: 'هذا الحقل مطلوب',
          },
        ],
      },
      width: 300,
      search: false,
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
      valueType: 'email',
      width: '5%',
    },
    {
      title: 'الحالة',
      key: 'status',
      dataIndex: 'status',
      valueType: 'status',
      render: (_, record) => (
        <Space>
          {record.status.map(({ name, color }) => (
            <Tag color={color} key={name}>
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
          onClick={() => onResponse(record.key)}
          icon={<CheckSquareOutlined style={{ color: '#63D697' }} />}
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
      });

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
      sendtime: contact.sendtime,
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
      .then(({ data: { data } }) => {
        setUpdate(!update);
      })
      .catch(() => {
        message.error('حدث خطأ ما');
      });
  };
  const onArchived = (id) => {
    axios
      .put(`/api/v1/contact/archives/${id}`)
      .then(({ data: { data } }) => {
        setUpdate(!update);
      })
      .catch(() => {
        message.error('حدث خطأ ما');
      });
  };

  return (
    <ProTable
      columns={columns}
      request={() =>
        Promise.resolve({
          data: tableData,
          success: true,
        })
      }
      success="true"
      pagination={{
        pageSize: 5,
      }}
      options={{ fullScreen: true, reload: true, setting: true }}
      rowKey="id"
      search={false}
      scroll={{ x: 1300 }}
      dateFormatter="string"
    />
  );
}
export default Contact;
