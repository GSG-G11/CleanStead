import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { EditOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Image, Table, message } from 'antd';
import './style.css';
import FormModal from './FormModal';

function Categories() {
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [update, setUpdate] = useState(false);
  const [categories, setCategories] = useState([]);
  const [categoryId, setCategoryId] = useState(null);
  const [categoryRecord, setCategoryRecord] = useState({});
  const [state, setState] = useState('');
  const [isUpload, setIsUpload] = useState(false);

  useEffect(() => {
    setLoading(true);
    const cancelTokenSource = axios.CancelToken.source();
    axios
      .get(`/api/v1/categories`, {
        cancelToken: cancelTokenSource.token,
      })
      .then(({ data: { data } }) => {
        setCategories(data);
      })
      .catch(() => {
        message.error('حدث خطأ ما');
      })
      .finally(() => setLoading(false));

    return () => cancelTokenSource.cancel();
  }, [update]);

  const onCreate = (values) => {
    if (categoryId !== null && state === 'edit') {
      axios
        .put(`/api/v1/categories/${categoryId}`, values)
        .then(() => {
          setUpdate(!update);
          message.success('تم التعديل بنجاح');
          setIsUpload(false);
          setCategoryRecord({});
        })
        .catch(() => {
          message.error('حدث خطأ ما');
        });
    } else if (state === 'add') {
      axios
        .post(`/api/v1/categories`, values)
        .then(() => {
          message.success('تم الاضافة بنجاح');
          setUpdate(!update);
          setIsUpload(false);
        })
        .catch(() => {
          message.error('حدث خطأ ما');
        });
    }
    setVisible(false);
  };

  const columns = [
    {
      title: '#',
      dataIndex: 'key',
      key: 'key',
      width: 50,
    },
    {
      title: 'التصنيف',
      dataIndex: 'name',
      key: 'name',
      width: 150,
    },
    {
      title: 'الوصف',
      dataIndex: 'description',
      key: 'description',
      width: 350,
    },
    {
      title: 'الصورة',
      dataIndex: 'image',
      key: 'image',
      width: 350,
    },
    {
      title: 'اكشن',
      key: 'action',
      render: (_, record) => (
        <Button
          onClick={() => {
            setVisible(true);
            setCategoryId(record.key);
            setCategoryRecord({
              name: record.name,
              description: record.description,
              image: record.image.props.src,
            });
            setState('edit');
          }}
          type="text"
          icon={<EditOutlined style={{ color: '#63D697' }} />}
        />
      ),
    },
  ];

  const data = [];
  categories.map((category) => {
    data.push({
      key: category.id,
      name: category.name,
      description: category.description,
      image: (
        <Image
          className="desc-image"
          src={category.image}
          preview={false}
          alt="category image"
        />
      ),
    });
  });

  return (
    <>
      <div>
        <Button
          icon={<PlusOutlined />}
          type="primary"
          onClick={() => {
            setVisible(true);
            setState('add');
          }}
        >
          إضافة تصنيف جديد
        </Button>
        <FormModal
          visible={visible}
          categoryRecord={categoryRecord}
          setCategoryRecord={setCategoryRecord}
          onCreate={onCreate}
          state={state}
          isUpload={isUpload}
          setIsUpload={setIsUpload}
          onCancel={() => {
            setIsUpload(false);
            setCategoryRecord({});
            setVisible(false);
          }}
        />
      </div>
      <Table
        columns={columns}
        dataSource={data}
        pagination={{
          pageSize: 5,
        }}
        loading={loading}
        scroll={{
          x: 700,
        }}
      />
    </>
  );
}

export default Categories;
