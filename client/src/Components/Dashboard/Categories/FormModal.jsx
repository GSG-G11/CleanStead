import React, { useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { Form, Input, Modal, message, Spin } from 'antd';

function FormModal({
  visible,
  onCreate,
  onCancel,
  state,
  categoryRecord,
  isUpload,
  setIsUpload,
}) {
  const [uploadedImage, setUploadedImage] = useState('');
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();

  const uploadImage = (e) => {
    setIsUpload(true);
    setLoading(true);
    const { files } = e.target;
    const formData = new FormData();
    formData.append('file', files[0]);
    formData.append(
      'upload_preset',
      process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET
    );
    axios
      .post(
        `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}/image/upload`,
        formData
      )
      .then(({ data }) => {
        setUploadedImage(data.secure_url);
      })
      .catch(() => message.error('حدث خطأ ما'))
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <Modal
      destroyOnClose
      visible={visible}
      title={state === 'add' ? 'إضافة تصنيف جديد' : 'تعديل التصنيف'}
      okText={state === 'add' ? 'إضافة' : 'تعديل'}
      cancelText="إلغاء"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
            values.image = isUpload ? uploadedImage : categoryRecord.image;
            onCreate(values);
          })
          .catch(() => {
            message.error('حدث خطأ ما');
          });
      }}
    >
      <Form
        preserve={false}
        form={form}
        initialValues={state === 'add' ? {} : categoryRecord}
        layout="vertical"
        name="form_in_modal"
      >
        <Form.Item
          name="name"
          label="الاسم"
          rules={[
            {
              required: true,
              message: 'الرجاء إدخال اسم التصنيف',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="description"
          label="الوصف"
          rules={[
            {
              required: true,
              message: 'الرجاء إدخال وصف للتصنيف',
            },
          ]}
        >
          <Input.TextArea />
        </Form.Item>
        <Form.Item
          label="الصورة"
          rules={[
            {
              required: true,
              message: 'الرجاء إدخال الصورة',
            },
          ]}
        >
          <Input
            name="image"
            variant="outlined"
            type="file"
            onChange={uploadImage}
          />
        </Form.Item>
        {loading && <Spin />}
      </Form>
    </Modal>
  );
}
FormModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  isUpload: PropTypes.bool.isRequired,
  onCreate: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  setIsUpload: PropTypes.func.isRequired,
  state: PropTypes.string.isRequired,
  categoryRecord: PropTypes.shape({
    name: PropTypes.string.isRequired,
    discription: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};
export default FormModal;
