import React, { useContext, useState } from 'react';
import { EditOutlined } from '@ant-design/icons';
import { Button, Image, Table } from 'antd';
import { CategoriesContext } from '../../../Contexts/CategoriesContext';
import './style.css';
import FormModal from './FormModal';

function Categories() {
  const [visible, setVisible] = useState(false);

  const onCreate = (values) => {
    console.log('Received values of form: ', values);
    setVisible(false);
  };

  const columns = [
    {
      title: 'التصنيف',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'الوصف',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'الصورة',
      dataIndex: 'image',
      key: 'image',
    },
    {
      title: 'اكشن',
      key: 'action',
      render: (_, record) => (
        <Button
          onClick={() => {
            setVisible(true);
          }}
          type="text"
          icon={<EditOutlined style={{ color: '#63D697' }} />}
        />
      ),
    },
  ];

  const { categories } = useContext(CategoriesContext);

  const data = [];
  categories.map((category) => {
    data.push({
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
        <FormModal
          visible={visible}
          onCreate={onCreate}
          onCancel={() => {
            setVisible(false);
          }}
        />
      </div>
      <Table columns={columns} dataSource={data} />
    </>
  );
}

export default Categories;
