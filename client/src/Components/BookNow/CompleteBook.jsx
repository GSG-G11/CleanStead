import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Button } from 'antd';
import { Link } from 'react-router-dom';
import { CheckCircleTwoTone } from '@ant-design/icons';

function CompleteBook({ handleOk, handleCancel, isModalVisible }) {
  return (
    <Modal
      title="تم ارسال الطلب بنجاح"
      visible={isModalVisible}
      onOk={handleOk}
      onCancel={handleCancel}
      style={{ textAlign: 'center' }}
      footer={[
        <Button key="submit" type="primary" onClick={handleOk}>
          <Link to="/book">حجز أخر</Link>
        </Button>,
        <Button key="back" onClick={handleCancel}>
          <Link to="/">الصفحة الرئيسية</Link>
        </Button>,
      ]}
    >
      <CheckCircleTwoTone
        twoToneColor="#52c41a"
        style={{ fontSize: '50px', marginBottom: '10px' }}
      />
      <p>سيتم مراجعة الحجز بأقرب وقت, شكرا لتعاملك معنا</p>
    </Modal>
  );
}

CompleteBook.propTypes = {
  handleOk: PropTypes.func.isRequired,
  handleCancel: PropTypes.func.isRequired,
  isModalVisible: PropTypes.bool.isRequired,
};

export default CompleteBook;
