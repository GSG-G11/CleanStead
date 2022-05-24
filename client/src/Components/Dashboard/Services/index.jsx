import React, { useContext, useEffect, useState } from 'react';
import { message, Button, Modal, Table, Space, Tag, Image } from 'antd';
import axios from 'axios';
import { DeleteOutlined, EditOutlined, PlusOutlined } from '@ant-design/icons';
import uuid from 'react-uuid';
import AddService from './AddService';
import { CategoriesContext } from '../../../Contexts/CategoriesContext';
import './style.css';

function Services() {
  const [services, setServices] = useState([]);
  const [archived, setArchived] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [serviceName, setServiceName] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [category, setCatogery] = useState('');
  const [description, setDescription] = useState('');
  const [serviceId, setServiceId] = useState('');
  const [edited, setEdited] = useState(false);
  const { categories } = useContext(CategoriesContext);

  const onChangeSelect = (value) => {
    categories.forEach((ele) => {
      if (ele.name === value) {
        setCatogery(ele.id);
      }
    });
  };

  const onChangeInput = ({ target: { name, value, files } }) => {
    // console.log(name, value, files);
    switch (name) {
      case 'serviceName':
        setServiceName(value);
        break;
      case 'price':
        setPrice(value);
        break;
      case 'image':
        console.log(name, files);
        setImage(files[0]);
        break;
      case 'description':
        setDescription(value);
        break;
      default:
        break;
    }
  };
  const onChangeImage = async ({ target: { name, files } }) => {
    const formData = new FormData();
    formData.append('file', files[0]);
    formData.append('upload_preset', 'zzplsoz0');

    try {
      const { data } = await axios.post(
        `https://api.cloudinary.com/v1_1/jehad/image/upload`,
        formData
      );
      setImage(data.secure_url);
    } catch {
      console.log('error');
    }
  };
  useEffect(() => {
    setLoading(true);
    const cancelTokenSource = axios.CancelToken.source();
    axios
      .get(`/api/v1/services`, {
        cancelToken: cancelTokenSource.token,
      })
      .then(({ data: { data } }) => {
        setServices(data);
      })
      .catch(() => {
        message.error('حدث خطأ ما');
      })
      .finally(() => setLoading(false));

    return () => cancelTokenSource.cancel();
  }, [archived]);

  const openModal = () => {
    setIsOpen(true);
  };

  const handleCancel = () => {
    setServiceName('');
    setPrice('');
    setImage('');
    setDescription('');
    setServiceId('');
    setCatogery('');
    setIsOpen(false);
    edited && setEdited(false);
  };

  const onEdit = (data) => {
    console.log(data);
    setServiceName(data.serviceNAme);
    setPrice(data.price);
    setImage(data.image.props.src);
    setDescription(data.description);
    setServiceId(data.key);
    setCatogery(data.categoryName);
    setIsOpen(true);
    setEdited(true);
  };

  const submitService = async () => {
    console.log(serviceName, price, image, description, category);
    if (image.length !== 0) {
      await axios
        .post('/api/v1/services', {
          name: serviceName,
          price,
          image,
          categoryId: category,
          description,
        })
        .then(() => {
          message.success('تمت اضافة خدمة بنجاح');
        })
        .catch((err) => {
          message.error(err);
        });
    }
  };

  const onArchived = (id) => {
    axios
      .delete(`/api/v1/services/${id}`)
      .then(() => {
        message.success('تم أرشفة الخدمة بنجاح');
        setArchived(!archived);
      })
      .catch(() => {
        message.error('حدث خطأ ما');
      });
  };

  const columns = [
    {
      title: '#',
      dataIndex: 'key',
      key: 'key',
    },
    {
      title: 'اسم التصنيف',
      dataIndex: 'serviceNAme',
      key: 'serviceName',
    },
    {
      title: ' اسم الخدمة',
      key: 'categoryName',
      dataIndex: 'categoryName',
    },
    {
      title: '($)السعر',
      key: 'price',
      dataIndex: 'price',
    },
    {
      title: 'صورة التصنيف',
      key: 'image',
      dataIndex: 'image',
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
      render: (text, record) => [
        <Button
          type="text"
          onClick={() => onEdit(record)}
          icon={<EditOutlined />}
        />,
        <Button
          type="text"
          onClick={() => onArchived(record.key)}
          icon={<DeleteOutlined style={{ color: '#EA5455' }} />}
        />,
      ],
    },
  ];
  const tableData = [];
  services.map((service) => {
    tableData.push({
      key: service.id,
      serviceNAme: service.name,
      categoryName: service.category,
      price: service.price,
      description: service.description,
      image: (
        <Image
          src={service.image}
          className="service-image"
          alt="service-image"
        />
      ),
      status:
        service.archived === false
          ? [
              {
                name: 'متوفر',
                color: 'success',
              },
            ]
          : [
              {
                name: 'غير متوفر ',
                color: 'error',
              },
            ],
    });
  });
  return (
    <div>
      <Button
        type="primary"
        className="add-btn"
        icon={<PlusOutlined />}
        onClick={openModal}
      />
      <Modal
        title=" اضافة تصنيف جديد "
        visible={isOpen}
        onCancel={handleCancel}
        width={430}
        className="add-service-modal"
      >
        <AddService
          onChangeSelect={onChangeSelect}
          onChangeInput={onChangeInput}
          serviceName={serviceName}
          price={price}
          image={image}
          category={category}
          description={description}
          edited={edited}
          submitService={submitService}
          onChangeImage={onChangeImage}
        />
      </Modal>
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
              {record.description}
            </p>
          ),
          rowExpandable: (record) => record.name !== 'Not Expandable',
        }}
        pagination={{
          pageSize: 5,
        }}
      />
    </div>
  );
}
export default Services;
